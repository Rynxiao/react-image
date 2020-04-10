import { XMLHttpRequestHeaders } from '../types';
import { IMAGE_LOAD_ERROR, NETWORK_ERROR } from './constants';

export default class ImageRequest {
  xmlHttpRequest: XMLHttpRequest;

  url: string;

  headers: XMLHttpRequestHeaders;

  setHeaders() {
    if (this.headers) {
      const keys = Object.keys(this.headers);
      keys.forEach((key: string) => {
        this.xmlHttpRequest.setRequestHeader(key, this.headers[key]);
      });
    }
  }

  request(url: string, headers: XMLHttpRequestHeaders) {
    this.url = url;
    this.headers = headers;

    if (this.xmlHttpRequest) {
      this.xmlHttpRequest.abort();
    }

    this.xmlHttpRequest = new XMLHttpRequest();
    this.xmlHttpRequest.open('GET', this.url);
    this.xmlHttpRequest.responseType = 'blob';
    this.setHeaders();
    this.xmlHttpRequest.send();

    return new Promise((resolve, reject) => {
      this.xmlHttpRequest.onload = () => {
        if (this.xmlHttpRequest.status === 200) {
          resolve(this.xmlHttpRequest.response);
        } else {
          reject(new Error(`${IMAGE_LOAD_ERROR}${this.xmlHttpRequest.statusText}`));
        }
      };

      this.xmlHttpRequest.onerror = () => {
        reject(new Error(NETWORK_ERROR));
      };
    });
  }
}
