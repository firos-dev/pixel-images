import React, { useEffect, useState } from "react";
import image from "./assets/image.jpg";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./config/firebase";
import background from "./assets/image.jpg";
import { useSelector } from "react-redux";

const Image = () => {
  const { data } = useSelector((state) => state.data);

  return (
    <div className="w-full flex justify-center items-center pt-3 m-0">
      <img src={data?.image || image} width="1057px" useMap="#mainImage" />

      <map name="mainImage">
        {data?.link_cordinates?.map((c) => {
          return (
            <area
              shape="rect"
              coords={c.cordinate}
              alt="Computer"
              href={c.url}
            />
          );
        })}
      </map>
    </div>
  );
};

export default Image;
