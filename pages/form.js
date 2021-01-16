import React from "react";
import styled from "styled-components";
import { useForm } from "./useForm";

export default function Form(props) {
  const [values, handleChange, handleSubmit] = useForm({
    email: "",
    password: "",
  });
  // const [emailError, setEmailErrore] = useState(null);

  // validate = () => {
  //   let emailError = "";

  //   if (!email.includes("@")) {
  //     emailError = "invalid email";
  //   }

  //   return true;
  // };

  console.log(values);
  return (
    <Wrapper>
      <h1>Login</h1>
      <FormWrapper>
        {/* <div> */}
        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        {/* <div style={{ fontSize: 12, color: "red" }}>{emailError}</div>
        </div> */}
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit" onSubmit={handleSubmit}>
          sign in
        </button>
      </FormWrapper>
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
`;

const FormWrapper = styled.div`
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
`;
