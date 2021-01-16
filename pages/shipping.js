import React from "react";
import styled from "styled-components";
import Link from "next/link";
// import { useForm } from "./useForm";

export default function shipping() {
  // const [values, handleChange, handleSubmit] = useForm({
  //   FirstName: "",
  //   LastName: "",
  //   Adress: "",
  //   Apartment: "",
  //   City: "",
  //   Phone: "",
  // });
  return (
    <Wrapper>
      <ContactWrapper>
        <h2>Contact information </h2>
        <span>
          Already have an account? &nbsp;
          <Link href="./form">Log in</Link>
        </span>

        <input type="email" placeholder="Email" />
        <label>
          <input type="checkbox" />
          Keep me up to date on news and exclusive offers
        </label>
      </ContactWrapper>
      <ShippingWrapper>
        <h2>Shipping address</h2>
        <input
          placeholder="First Name"
          // name="First Name"
          // type="text"
          // value={values.FirstName}
          // onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          // name="FirstName"
          // type="text"
          // value={values.FirstName}
          // onChange={handleChange}
        />
        <input
          placeholder="Adress"
          // name="Adress"
          // type="text"
          // value={values.Adress}
          // onChange={handleChange}
        />
        <input
          placeholder="Apartment"
          // name="partment"
          // type="text"
          // value={values.Apartment}
          // onChange={handleChange}
        />
        <input
          placeholder="City"
          // name="City"
          // type="text"
          // value={values.City}
          // onChange={handleChange}
        />
        <input
          placeholder="Phone"
          // name="Phone"
          // type="text"
          // value={values.Phone}
          // onChange={handleChange}
        />
        <button type="submit">Continue to shipping</button>
      </ShippingWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  color: #333333;
  font-size: 20px;
  font-weight: 15px;
`;
const ContactWrapper = styled.div`
  position: absolute;
  display: grid;
  padding: 20px;
  top: 70px;
  right: 350px;
  width: 690px;
  border-bottom: 1px solid #d9d9d9;
  h2 {
    margin-bottom: 20px;
    margin-left: 7px;
  }
  span {
    font-size: 15px;
    margin-left: 7px;
  }
  input {
    margin: 7px;
    padding: 13px;
    border: 2px solid #d9d9d9;
    border-radius: 5px;
  }
  label {
    font-size: 15px;
  }
  a {
    color: #45818e;
  }
`;

const ShippingWrapper = styled.div`
  position: absolute;
  display: block;
  top: 250px;
  right: 350px;
  padding: 20px;
  margin-top: 25px;
  h2 {
    margin: 17px;
    margin-left: 7px;
  }
  input {
    display: block;
    padding: 15px;
    width: 600px;
    margin: 7px;
    border: 2px solid #d9d9d9;
    border-radius: 5px;
  }
  button {
    position: absolute;
    right: 30px;
    font-size: 15px;
    font-weight: 10px;
    padding: 15px;
    text-align: center;
    margin-top: 20px;
    border: 2px solid #45818e;

    border-radius: 2px;
    background-color: #45818e;
  }
`;
