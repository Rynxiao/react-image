// eslint-disable-next-line import/prefer-default-export
export const loadImage = (imageUrl: string): Promise<any> => (
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject();
    image.src = imageUrl;
    return image;
  })
);
