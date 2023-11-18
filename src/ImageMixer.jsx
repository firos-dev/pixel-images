import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "./config/firebase";

const ImageMixer = () => {
  const canvasRef = useRef(null);
  const location = useLocation();
  const images = location?.state?.images;
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Loop through each image and draw it onto the canvas
    images?.forEach((image, index) => {
      const img = new Image();
      img.src = image.image;
      img.width = image.width;
      img.height = image.height;

      // Adjust the position based on the image size and index
      const x = image.x; // Adjust this value as needed
      const y = image.y;

      // Draw the image onto the canvas
      img.onload = () => {
        context.drawImage(img, x, y, img.width, img.height);
      };
    });
  }, [images]);

  const saveImage = async () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");
    const docRef =  doc(db,"data", "PXIMAGE1")
      const data = {
        id: "dfdsfsdfsd",
        image,
        url: "http://google.com",
        pixel: [1, 2],
      }
    await setDoc(docRef, data)
  };

  return (
    <div className="w-full mt-2 mb-5">
      <div className="flex items-center justify-center flex-col">
        <canvas
          ref={canvasRef}
          width="1152px"
          height="1000px"
          className="image-canvas"
        />
        <button
          class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          onClick={saveImage}
        >
          Save Image
        </button>
      </div>
    </div>
  );
};

export default ImageMixer;
