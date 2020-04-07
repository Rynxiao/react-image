import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Error from './components/error';
import { loadImage } from './utils';
import Loading from './components/loading';
import LOADING_STATE from './utils/constants';

export interface Props {
  src: string;
  width?: number;
  height?: number;
  className?: string;
  style?: object;
  description?: string;
  errorMessage?: string;
}

export interface State {
  loading: boolean;
  isError: boolean;
  image: HTMLImageElement | null;
}

const Image: React.FC<Props> = ({
  src,
  width,
  height = width,
  className,
  style,
  description,
  errorMessage,
}) => {
  const [state, setState] = useState<State>(LOADING_STATE.INITIAL);
  const imageStyle = { width, height };
  const imageWrapperStyle = { ...imageStyle, ...style };
  const imageClassName = className ? `${styles.container} ${className}` : styles.container;

  useEffect(() => {
    if (src) {
      setState(LOADING_STATE.LOADING);
      loadImage(src)
        .then((img: HTMLImageElement) => (
          setState({ ...LOADING_STATE.SUCCESS, image: img })
        ))
        .catch(() => setState(LOADING_STATE.FAIL));
    }
  }, [loadImage, src]);

  const renderBody = () => {
    let body;
    const { isError, loading, image } = state;
    if (loading) {
      body = <Loading />;
    } else if (isError) {
      body = <Error message={errorMessage} />;
    } else {
      body = (
        <>
          {React.createElement(
            'img',
            {
              src: image && image.src,
              alt: description,
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
      {renderBody()}
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
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  description: PropTypes.string,
  errorMessage: PropTypes.string,
};

export type ImageProps = Props;
export default Image;
