export const loadImage = (imageUrl: string): Promise<any> => (
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject();
    image.src = imageUrl;
    return image;
  })
);

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
