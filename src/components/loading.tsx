import React from 'react';
import styles from './index.module.scss';

const spinnerIcon = require('../assets/icn-spinner.svg');

const Loading: React.FC = () => (
  <div className={styles.loading}>
    <div className={styles.icon} dangerouslySetInnerHTML={{ __html: spinnerIcon }} />
  </div>
);

export default Loading;
