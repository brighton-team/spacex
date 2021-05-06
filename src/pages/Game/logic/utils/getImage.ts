const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const getImage = (imageSrc: string): HTMLImageElement | null => {
  const image = !isServer ? new Image() : null;

  if (image) {
    image.src = imageSrc;
  }

  return image;
};
