import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export interface ErrorProps {
  message?: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => (
  <div className={styles.error}>{message}</div>
);

Error.defaultProps = {
  message: 'Error',
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
