import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Error from './components/error';

export interface Props {
  src: string;
  width?: number;
  className?: string;
  style?: object;
  description?: string;
}

const Image: React.FC<Props> = ({
  src,
  width,
  className,
  style,
  description,
}) => {
  const imageStyle = { width, height: width };
  const imageWrapperStyle = { ...imageStyle, ...style };
  const imageClassName = className ? `${styles.container} ${className}` : styles.container;
  const [isError, setIsError] = useState<boolean>(false);

  const handleOnError = () => setIsError(true);

  return (
    <div className={imageClassName} style={imageWrapperStyle}>
      {isError ? (
        <Error />
      ) : (
        <img style={imageStyle} src={src} alt={description} onError={handleOnError} />
      )}
    </div>
  );
};

Image.defaultProps = {
  width: 200,
  className: '',
  style: {},
  description: '',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  description: PropTypes.string,
};

export type ImageProps = Props;
export default Image;
