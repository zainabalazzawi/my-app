import React from "react";
import styled from "styled-components";
import Link from "next/link";
const CelebrationData = [
  {
    title: "Celebration Cakes ",
    word: "view",
    img: "/celebration-1.png",
    price: "price: $20",
    link: "/celebration-cakes ",
  },
  {
    title: "Chocolate Caramel Cake",
    word: "view",
    img: "/celebration-1.png",
    price: "price: $46.99",
    link: "/chocolate-caramel",
  },
  {
    title: "Chocolate Mousse Cake",
    word: "view",
    img: "/celebration-2.png",
    price: "price: $46.99",
    link: "/chocolate-mousse",
  },
  {
    title: "Lemon Mousse Cake",
    word: "view",
    img: "/celebration-3.png",
    price: "price: $50.99",
    link: "/lemon-mousse",
  },
];

export default function Celebration() {
  return (
    <Wrapper>
      <CelebrationWrapper>
        {CelebrationData.map((item, index) => (
          <Link href={item.link} key={index}>
            <CelebrationItem title={item.title}>
              <img src={item.img} alt={item.title} />

              {item.title}
              <PriceWrapper>{item.price}</PriceWrapper>
              <ViewWrapper>{item.word}</ViewWrapper>
            </CelebrationItem>
          </Link>
        ))}
      </CelebrationWrapper>
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

const CelebrationWrapper = styled.div`
  position: absolute;
  right: 100px;
  top: 15px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  border-bottom: 1px solid #bd7120;
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
const CelebrationItem = styled.div`
  position: relative;
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
    background: rgba(255, 255, 255, 1);
    border: 1px solid #bd7120;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    /* scale(1.2) */
    ${ViewWrapper} {
      display: block;
    }
  }
`;

const PriceWrapper = styled.p`
  font-size: 15px;
  position: relative;
  /* is that position correct ? */
  top: -17px;
`;
