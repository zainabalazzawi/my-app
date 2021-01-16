import React from "react";
import styled from "styled-components";
export default function Checkbox() {
  return (
    <Wrapper>
      <label>
        <input type="checkbox" />
        Add One Candle +$1.00
      </label>
      <label>
        <input type="checkbox" />
        Add Birthday Card +$15.00
      </label>
      <label>
        <input type="checkbox" />
        Add a Personalized Cake Message +$2.00
      </label>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  width: 400px;
  height: 200px;
  right: 230px;
  top: 390px;
  font-size: 15px;
  color: #704313;

  label {
    display: block;
    padding: 4px;
  }
`;
