import React, { useState } from "react";
import styled from "styled-components";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Wrapper>
      <QuantityWrapper>quantity</QuantityWrapper>
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>
        -
      </button>
      <div> {count}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  right: 100px;
  top: 290px;
  grid-template-columns: repeat(3, auto);
  display: grid;
  background: #e1b472;
  border: 1px solid #bd7120;

  button {
    width: 30px;
    height: 36px;
    background: #e1b472;
    border: 1px solid #bd7120;
  }

  div {
    width: 440px;
    height: 36px;
    text-align: center;
  }
`;
const QuantityWrapper = styled.h1`
  position: absolute;
  top: -40px;
  right: 415px;
  font-size: 20px;
  font-weight: 20px;
  color: #946013;
  padding: 10px;
  text-align: center;
`;
