import React from 'react';

export interface XMLHttpRequestHeaders {
  [key: string]: string;
}

export interface Props {
  src: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  description?: string;
  errorMessage?: string;
  headers?: XMLHttpRequestHeaders;
  loader?: () => React.ReactNode | null;
  renderError?: () => React.ReactNode | null;
}

export interface State {
  loading: boolean;
  isError: boolean;
  image: HTMLImageElement | null;
}
