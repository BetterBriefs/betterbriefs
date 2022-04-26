import React, { useCallback } from "react";
import { Button } from "../button/Button";
import { TextInput } from "../textinput/TextInput";
import { useFormik } from "formik";
import { Link, Navigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import * as Yup from "yup";

export const SignUpForm = ({ user }) => {
  if (user) return <Navigate to="/"></Navigate>;

  async function handleSubmit(name, password, email) {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = userCredentials.user.uid;
      await setDoc(doc(db, "users", uid), {
        name: name,
        picture:
          "gs://betterbriefs-8b032.appspot.com/assets/default_profile.png",
      });
    } catch (error) {
      alert(error.message);
    }
  }
  // TODO: add dsgvo
  //  https://codesandbox.io/s/l2r832l8x7?file=/src/index.js:94-121 code for password confirmation
  const Schema = Yup.object().shape({
    name: Yup.string().min(3).required("name is required"),
    email: Yup.string().min(6).required("email is required"),
    password: Yup.string().required("password is required"),
    repeatpassword: Yup.string().when("password", {
      is: (val) => !!(val && val.length > 0),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });

  const formik = useFormik({
    initialValues: { name: "", password: "", repeatpassword: "", email: "" },
    validationSchema: Schema,
    onSubmit: (values) => {
      // log the values of the form
      handleSubmit(values.name, values.password, values.email);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput
        type="text"
        id="name"
        name="name"
        label="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        errorMessage={formik.errors.name}
      ></TextInput>
      <TextInput
        type="email"
        id="email"
        name="email"
        label="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        errorMessage={formik.errors.email}
      ></TextInput>
      <TextInput
        type="password"
        id="password"
        name="password"
        label="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        errorMessage={formik.errors.password}
      ></TextInput>
      <TextInput
        type="password"
        id="repeatpassword"
        name="repeatpassword"
        label="repeat password"
        onChange={formik.handleChange}
        value={formik.values.repeatpassword}
        errorMessage={formik.errors.repeatpassword}
      ></TextInput>
      <Button onClick={useCallback(() => console.log("Sign up"), [])}>
        Sign Up
      </Button>
      <Link to="/sign-in">Sign In</Link>
    </form>
  );
};
