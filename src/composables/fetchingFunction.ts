interface PreloadImage {
  (src: string): Promise<void>;
}

export const preloadImage: PreloadImage = (src) => {
  return new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.src = src;

    img.onload = () => resolve();
    img.onerror = (err) => reject(err);
  });
};