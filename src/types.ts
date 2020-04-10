export interface XMLHttpRequestHeaders {
  [key: string]: string;
}

export interface Props {
  src: string;
  width?: number;
  height?: number;
  className?: string;
  style?: object;
  description?: string;
  errorMessage?: string;
  headers?: XMLHttpRequestHeaders;
}

export interface State {
  loading: boolean;
  isError: boolean;
  image: HTMLImageElement | null;
}
