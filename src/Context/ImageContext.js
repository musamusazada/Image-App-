import React, { useState, useContext, Children, useEffect } from "react";

const ImageContext = React.createContext();

export function useImage() {
  return useContext(ImageContext);
}

export default function ImageProvider({ children }) {
  const [imgArray, setImgArray] = useState([]);

  useEffect(async () => {
    await fetch(
      "https://api.unsplash.com/photos/random/?count=3&client_id=G3lIXm7f88g1lL978UKuBqbs99iqBy5bVZDBprbtPlU"
    )
      .then((results) => results.json())
      .then((data) => {
        setImgArray(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <ImageContext.Provider value={imgArray}>{children}</ImageContext.Provider>
  );
}
