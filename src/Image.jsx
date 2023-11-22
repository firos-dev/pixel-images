import React, { useEffect, useState } from "react";
import image from "./assets/image.jpg";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./config/firebase";
import background from './assets/image.jpg'

const Image = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadImage();
  }, []);

  const loadImage = async () => {
    const docRef = doc(db, "data", "PXIMAGE1");

    getDoc(docRef).then((docSnapshot) => {
      if (docSnapshot.exists()) {
        setData(docSnapshot.data());
      } else {
        console.log("No such document!");
      }
    });
  };

  console.log(data);

  return (
    <div className="w-full flex justify-center items-center pt-3 m-0">
      <img src={data?.image ||image} width="1057px" />
    </div>
  );
};

export default Image;
