import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!values.email.includes("@")) {
    errors.email = "invalid email";
  }
  if (!values.FirstName) {
    errors.FirstName = "Enter a first name";
  }
  if (!values.LastName) {
    errors.LastName = "Enter a last name";
  }
  if (!values.Adress) {
    errors.Adress = "Enter an address";
  }
  if (!values.City) {
    errors.City = "Enter a city";
  }
  if (!values.Phone) {
    errors.Phone = "Enter a valid phone number";
  }
  return errors;
};

export default function shipping() {
  const formik = useFormik({
    initialValues: {
      email: "",
      FirstName: "",
      LastName: "",
      Adress: "",
      Apartment: "",
      City: "",
      Phone: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const { touched, errors } = formik;
  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <ContactWrapper>
          <h2>Contact information </h2>
          <span>
            Already have an account? &nbsp;
            <Link href="./form">Log in</Link>
          </span>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {errors.email && touched.email ? (
            <span style={{ fontSize: 15, color: "red" }}>{errors.email}</span>
          ) : null}
          <label>
            <input type="checkbox" />
            Keep me up to date on news and exclusive offers
          </label>
        </ContactWrapper>
        <ShippingWrapper>
          <h2>Shipping address</h2>
          <input
            type="First Name"
            id="First Name"
            placeholder="First Name"
            {...formik.getFieldProps("First Name")}
          />
          {errors.FirstName && touched.FirstName ? (
            <span style={{ fontSize: 15, color: "red" }}>
              {errors.FirstName}
            </span>
          ) : null}

          <input
            type="Last Name"
            id="Last Name"
            placeholder="Last Name"
            {...formik.getFieldProps("Last Name")}
          />
          {errors.LastName && touched.LastName ? (
            <span style={{ fontSize: 15, color: "red" }}>
              {errors.LastName}
            </span>
          ) : null}

          <input
            type="Adress"
            id="Adress"
            placeholder="Adress"
            {...formik.getFieldProps("Adress")}
          />
          {errors.Adress && touched.Adress ? (
            <span style={{ fontSize: 15, color: "red" }}>{errors.Adress}</span>
          ) : null}

          <input placeholder="Apartment" />

          <input
            type="City"
            id="City"
            placeholder="City"
            {...formik.getFieldProps("City")}
          />
          {errors.City && touched.City ? (
            <span style={{ fontSize: 15, color: "red" }}>{errors.City}</span>
          ) : null}

          <input
            type="Phone"
            id="Phoney"
            placeholder="Phone"
            {...formik.getFieldProps("Phone")}
          />
          {errors.Phone && touched.Phone ? (
            <span style={{ fontSize: 15, color: "red" }}>{errors.Phone}</span>
          ) : null}

          <button type="submit">Continue to shipping</button>
        </ShippingWrapper>
      </form>
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
