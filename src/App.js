import { useEffect, useState } from "react";
import ImageProvider from "./Context/ImageContext";
import ImagesWrapper from "./Components/ImagesWrapper/ImagesWrapper";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <ImageProvider>
      <div className="container">
        <Navbar>Image App</Navbar>
        <ImagesWrapper />
      </div>
    </ImageProvider>
  );
}

export default App;
