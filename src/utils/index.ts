import { NETWORK_ERROR } from './constants';
import { XMLHttpRequestHeaders } from '../types';
import ImageRequest from './imageRequest';

export const getImage = (src: string) => (
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(NETWORK_ERROR));
    image.src = src;
    return image;
  })
);

export const loadImage = async (
  imageRequest: ImageRequest,
  imageUrl: string,
  headers: XMLHttpRequestHeaders = null,
) => {
  const response = await imageRequest.request(imageUrl, headers);
  const src = window.URL.createObjectURL(response);
  return getImage(src);
};

export const getDisplayImageSize = (
  image: HTMLImageElement,
  wrapperWidth: number,
  wrapperHeight: number,
) => {
  const imageWidth = image.width;
  const imageHeight = image.height;
  const ratio = imageWidth / imageHeight;
  let displayWidth = imageWidth;
  let displayHeight = imageHeight;
  if (ratio > 1) {
    if (imageWidth > wrapperWidth) {
      displayWidth = wrapperWidth;
      displayHeight = parseInt(`${(1 / ratio) * wrapperWidth}`, 10);
    }
  } else if (imageHeight > wrapperHeight) {
    displayWidth = parseInt(`${ratio * wrapperHeight}`, 10);
    displayHeight = wrapperHeight;
  }
  return { displayWidth, displayHeight };
};
