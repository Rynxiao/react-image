import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const damageImg = require('../assets/icn-damage.svg');

export interface ErrorProps {
  message?: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => (
  <div className={styles.error}>
    <span className={styles.img} dangerouslySetInnerHTML={{ __html: damageImg }} />
    <div>{message}</div>
  </div>
);

Error.defaultProps = {
  message: 'Broken',
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
