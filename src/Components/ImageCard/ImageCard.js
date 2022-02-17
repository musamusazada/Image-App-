import React, { useState } from "react";
import styled from "styled-components";
const StyledImageCard = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export default function ImageCard(props) {
  const [toggleShow, setToggleShow] = useState(props.toggleShow);
  const ToggleHandler = (e) => {
    e.preventDefault();
    setToggleShow(!toggleShow);
  };
  return (
    <StyledImageCard>
      <button className="default-button" onClick={ToggleHandler}>
        {toggleShow ? "Hide Image" : "Show Image"}
      </button>
      <img
        className={toggleShow ? "hide" : ""}
        src={props.image}
        alt="Unsplash Image"
      />
    </StyledImageCard>
  );
}
