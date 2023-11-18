import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router';

const ImageMixer = () => {
  const canvasRef = useRef(null);
  const location = useLocation()
  const images = location?.state?.images
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Loop through each image and draw it onto the canvas
    images.forEach((image, index) => {
      const img = new Image();
      console.log(img);
      img.src = image.image;
      img.width = image.width
      img.height = image.height

      // Adjust the position based on the image size and index
      const x = image.x; // Adjust this value as needed
      const y = image.y;

      // Draw the image onto the canvas
      img.onload = () => {
        context.drawImage(img, x, y, img.width, img.height);
      };
    });
  }, [images]);

  const saveImage = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL('image/png');
    
    // You can now use the 'image' variable as the single image created from multiple images
    console.log(image);
  };

  return (
    <div className='w-full'>

    <div className="container ml-96 mx-auto text-center">
      <canvas ref={canvasRef} width="1056px" height="1056px" className="image-canvas" />
      <button onClick={saveImage}>Save Image</button>
    </div>
    </div>
  );
};

export default ImageMixer;
