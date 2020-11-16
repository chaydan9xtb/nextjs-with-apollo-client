import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import Link from "next/link";
import InputField from "../../components/Fields/inputField";
import styles from "./style.module.css";
import { gql, useQuery, useMutation } from "@apollo/client";

const GET_ACC = gql`
  query getUser {
    getUsers {
      id
      username
      password
    }
  }
`;

const ADD_ACC = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      username
      password
    }
  }
`;

function Login() {
  const { data } = useQuery(GET_ACC);
  const [addUser, { inputData }] = useMutation(ADD_ACC);
  const [viewError, setError] = useState("");
  const [viewPassWord, setViewPassWord] = useState(false);

  const showPassWord = () => {
    setViewPassWord(!viewPassWord);
  };

  const onSubmit = (values) => {
    addUser({ username: values.username, password: values.password });
    // if (values.username && values.password) {
    //   const checkAcc = (data.getUsers || []).some(
    //     (item) =>
    //       values.username === item.username && values.password === item.password
    //   );
    //   if (checkAcc) {
    //     setError("");
    //     alert("Login success");
    //   } else {
    //     setError("incorrect");
    //   }
    // }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "require";
      setError("empty");
    }
    if (!values.password) {
      errors.password = "require";
      setError("empty");
    }
    return errors;
  };

  return (
    <div className={`h-screen relative ${styles.bg_login}`}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className={`bg-white absoluted inline-block rounded rounded-lg absolute inset-auto ${styles.w_420} ${styles.login_form}`}
          >
            <h2 className="text-black font-medium text-lg uppercase mb-4 text-2xl font-bold mb-10">
              Login
            </h2>
            <Field
              name="username"
              className={`h-8 p-2 text-base mb-8 ${styles.input_login}  `}
              placeholder="Enter your Email"
              component={InputField}
              inputType="text"
            />
            <Field
              name="password"
              className={`h-8 p-2 text-base ${styles.input_login}`}
              placeholder="Enter your Password"
              component={InputField}
              inputType="password"
              viewPassWord={viewPassWord}
              showPassWord={showPassWord}
            />
            {viewError === "incorrect" ? (
              <p className="text-red-600 text-center mt-8 text-base italic">
                Your email or password was incorrect
              </p>
            ) : null}
            <div className="mb-16 mt-12">
              <button
                className={`w-full text-white p-1 text-gray-200 h-8 ${styles.btn_submit_login}`}
                type="submit"
              >
                Submit
              </button>
            </div>
            <div className={`${styles.line} text-center font-bold`}>
              <span className={styles.line_span}>Or</span>
            </div>
            <div className="social-network mt-10 text-center">
              <img
                src="/images/icon_fb.png"
                className="inline-block mr-4"
              ></img>
              <img src="/images/icon_fb.png" className="inline-block"></img>
            </div>
            <div>
              <p className="text-center text-sm mt-10">
                Don't have an account?{" "}
                <Link href="/register">
                  <a className="text-blue-600">Sign up</a>
                </Link>
              </p>
              <p className="mb-1 text-center text-sm">Forgot password?</p>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default Login;
