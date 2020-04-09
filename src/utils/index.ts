import { IMAGE_LOAD_ERROR, NETWORK_ERROR } from './constants';

export const isEmptyObject = (obj: object) => (
  !!obj && Object.keys(obj).length === 0 && obj.constructor === Object
);

export const getImage = (src: string) => (
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(NETWORK_ERROR));
    image.src = src;
    return image;
  })
);

export const loadImageWithXHR = (url: string) => (
  new Promise(((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';

    request.onload = () => {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(new Error(`${IMAGE_LOAD_ERROR}${request.statusText}`));
      }
    };

    request.onerror = () => {
      reject(new Error(NETWORK_ERROR));
    };

    request.send();
  }))
);

export const loadImage = async (imageUrl: string, headers: Headers = null) => {
  let src = imageUrl;
  if (!isEmptyObject(headers)) {
    const response = await loadImageWithXHR(imageUrl);
    src = window.URL.createObjectURL(response);
  }
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
