import React from "react";
import styled from "styled-components";
import { useImage } from "../../Context/ImageContext";
import ImageCard from "../ImageCard/ImageCard";
export default function ImagesWrapper() {
  const images = useImage();

  const StyledImageWraper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  `;

  return (
    <StyledImageWraper>
      {images.map((data) => {
        return <ImageCard toggleShow={false} image={data.urls.raw} />;
      })}
    </StyledImageWraper>
  );
}
