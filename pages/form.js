import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!values.email.includes("@")) {
    errors.email = "invalid email";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 5) {
    errors.password = "Password must be at least 5 characters long";
  }

  return errors;
};

export default function form() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const { touched, errors } = formik;
  return (
    <Wrapper>
      <h1>Login</h1>

      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...formik.getFieldProps("email")}
        />
        {errors.email && touched.email ? (
          <span style={{ fontSize: 15, color: "red" }}>{errors.email}</span>
        ) : null}
        <input
          type="password"
          id="password"
          placeholder="password"
          {...formik.getFieldProps("password")}
        />
        {errors.password && touched.password ? (
          <span style={{ fontSize: 15, color: "red" }}>{errors.password}</span>
        ) : null}

        <button type="submit">Sign Up</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: block;
  color: #134f5c;

  h1 {
    font-size: 40px;
    position: absolute;
    right: 700px;
    top: 250px;
  }

  form {
    position: absolute;
    right: 400px;
    top: 300px;
    input {
      padding: 13px;
      padding-bottom: 17px;
      width: 600px;
      display: block;
      margin: 5px;
      background-color: #f3f3f3;
      border: 1px solid #f3f3f3;
    }

    button {
      padding: 15px;
      width: 630px;
      display: block;
      font-size: 15px;
      font-weight: bold;
      margin: 5px;
      background: #134f5c;
      color: #efefef;
      font-family: "Comic Sans MS";
    }
  }
`;
