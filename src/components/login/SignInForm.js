import React, { useCallback } from 'react'
import { Button } from '../button/Button'
import { TextInput } from '../textinput/TextInput'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { Link, Navigate } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const SignInForm = ({ user }) => {
  if (user) return <Navigate to="/"></Navigate>
  async function handleSubmit (email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      alert(error.message)
    }
  }
  const userSchema = object({
    email: string().min(3),
    password: string().min(6)
  })

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: userSchema,
    onSubmit: (values) => {
      handleSubmit(values.email, values.password)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput
        type="text"
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
      <Button onClick={
        useCallback(
          () => console.log('Sign in'),
          []
        )
        }>Sign In</Button>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/reset-password">Forgot Password?</Link>
    </form>
  )
}
