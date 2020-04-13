import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Error from './components/error';
import { getDisplayImageSize, loadImage } from './utils';
import Loading from './components/loading';
import LOADING_STATE from './utils/constants';
import { Props, State } from './types';
import ImageRequest from './utils/imageRequest';

const Image: React.FC<Props> = ({
  src,
  width,
  height = width,
  className,
  style,
  description,
  errorMessage,
  renderError,
  headers,
  loader,
}) => {
  const [state, setState] = useState<State>(LOADING_STATE.INITIAL);
  const [request] = useState<ImageRequest>(new ImageRequest());
  const imageStyle = { width: `${width}px`, height: `${height}px` };
  const imageWrapperStyle = { ...imageStyle, ...style };
  const imageClassName = className ? `${styles.container} ${className}` : styles.container;

  useEffect(() => {
    if (src) {
      setState(LOADING_STATE.LOADING);
      loadImage(request, src, headers).then((img: HTMLImageElement) => {
        const { displayWidth, displayHeight } = getDisplayImageSize(img, width, height);
        const displayImage = img;
        displayImage.width = displayWidth;
        displayImage.height = displayHeight;
        setState({ ...LOADING_STATE.SUCCESS, image: displayImage });
      }).catch(() => setState(LOADING_STATE.FAIL));
    }
  }, [loadImage, src]);

  const renderBody = () => {
    let body;
    const { isError, loading, image } = state;
    if (loading) {
      body = loader ? loader() : <Loading />;
    } else if (isError) {
      body = renderError ? renderError() : <Error message={errorMessage} />;
    } else if (image) {
      body = (
        <>
          {React.createElement(
            'img',
            {
              src: image.src,
              alt: description,
              width: image.width,
              height: image.height,
              loading: 'lazy',
            },
          )}
        </>
      );
    }
    return body;
  };

  return (
    <div className={imageClassName} style={imageWrapperStyle}>
      <span className={styles.image}>{renderBody()}</span>
    </div>
  );
};

Image.defaultProps = {
  width: 200,
  height: 200,
  className: '',
  style: {},
  description: '',
  errorMessage: '',
  headers: null,
  loader: null,
  renderError: null,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  headers: PropTypes.shape({}),
  loader: PropTypes.func,
  renderError: PropTypes.func,
};

export type ImageProps = Props;
export default Image;
