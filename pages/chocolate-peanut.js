import React from "react";
import styled from "styled-components";
import Counter from "../components/counter";
import Checkbox from "../components/checkbox";
import Link from "next/link";
export default function Peanut() {
  return (
    <Wrapper>
      <TitleWrapper>
        Chocolate Peanut Butter Party Cupcake
        <span> price: $42.99</span>
      </TitleWrapper>
      <TextWrapper>
        Moist chocolate cupcake, with homemade peanut butter frosting,
        embellished with a mini peanut butter cup.
      </TextWrapper>
      <img src="/mini-1.png" alt="mini" />

      <Counter />
      <Checkbox />
      <p className="information">
        PLEASE WRITE YOUR PERSONALIZED MESSAGE BELOW
      </p>
      <input type="text" className="message" />
      <Link href="../shipping">
        <button type="button" className="order">
          Order Now
        </button>
      </Link>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  justify-content: space-between;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  img {
    position: absolute;
    top: 150px;
    right: 700px;
    width: 500px;
  }
  .message {
    position: absolute;
    right: 90px;
    top: 515px;
    width: 530px;
    height: 150px;
    border-color: #e1b472;
    border-radius: 5px;
  }
  .information {
    position: absolute;
    top: 490px;
    right: 220px;
    color: #946013;
  }
  .order {
    position: absolute;
    top: 700px;
    right: 100px;
    width: 500px;
    height: 30px;
    background: #e1b472;
    border: 2px solid #bd7120;
  }
`;
const TextWrapper = styled.p`
  position: absolute;
  top: 580px;
  right: 700px;
  width: 500px;
  line-height: 1.5;
  background: #e1b472;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  color: #472f09;
`;

const TitleWrapper = styled.h1`
  position: absolute;
  top: 150px;
  right: 100px;
  font-size: 30px;
  font-weight: 10px;
  display: grid;
  gap: 10px;
  color: #704313;
  span {
    font-size: 20px;
  }
`;
