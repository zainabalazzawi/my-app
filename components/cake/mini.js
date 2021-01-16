import React from "react";
import styled from "styled-components";
import Link from "next/link";

const MiniData = [
  {
    title: "Mini Cakes",
    word: "view",
    img: "/mini-1.png",
    price: "price: $20",
    link: "/mini-cakes",
  },
  {
    title: "Chocolate Peanut Butter",
    word: "view",
    img: "/mini-1.png",
    price: "price: $20",
    link: "/chocolate-peanut",
  },
  {
    title: "Caramel Party",
    word: "view",
    img: "/mini-2.png",
    price: "price: $20",
    link: "/caramel-party",
  },
  {
    title: "Mocha Espresso Square",
    word: "view",
    img: "mini-3.png",
    price: "price: $20",
    link: "/mocha-espresso",
  },
];

export default function Mini() {
  return (
    <Wrapper>
      <MiniWrapper>
        {MiniData.map((item, index) => (
          <Link href={item.link} key={index}>
            <MiniItem title={item.title}>
              <img src={item.img} alt={item.title} />
              {item.title}
              <PriceWrapper>{item.price}</PriceWrapper>
              <ViewWrapper>{item.word}</ViewWrapper>
            </MiniItem>
          </Link>
        ))}
      </MiniWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 200px;
    height: 150px;
  }
`;
const MiniWrapper = styled.div`
  right: 100px;
  top: 300px;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, auto);
`;
const ViewWrapper = styled.div`
  color: #704313;
  width: 80px;
  padding: 8px;
  text-align: center;
  background: #bd7120;
  font-weight: bold;
  font-size: 20px;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 80px;
  display: none;
`;
const MiniItem = styled.div`
  width: 250px;
  height: 300px;
  font-size: 17px;
  font-weight: bold;
  display: grid;
  align-items: center;
  padding: 25px;
  transition: 0.5s ease-out;
  color: #704313;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background: rgba(255, 255, 255);
    border: 1px solid #bd7120;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    ${ViewWrapper} {
      display: block;
    }
  }
`;
const PriceWrapper = styled.p`
  font-size: 15px;
  position: relative;
  /* is that positionc correct ? */
  top: -17px;
`;
