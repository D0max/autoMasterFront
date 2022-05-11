import React from 'react';
import { useFormik } from 'formik';

import {AuthPadding, BodyAuth, TitleAuth} from './styled'
import InputText from "../UI/InputText";
import Button from "../UI/Button";
import {login} from "../../store/actions/authActions";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import InputPassword from "../UI/InputPassword";
import {ILoginBody} from "../../types/actions";


const Login = () => {
  const dispatch = useAppDispatch()

  const sendLogin = React.useCallback((data: ILoginBody) => {
    dispatch(login(data as ILoginBody))
  }, [dispatch])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (data) => {
      let error: ILoginBody = {}
      if (!data.email) {
        error.email = 'Field required'
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        error.email = 'Invalid email address. E.g. example@email.com';
      }
      if (!data.password) {
        error.password = 'Password is required.';
      }

      if (data.password.length < 3) {
        error.password = 'Password length must be greater than 3'
      }
      return error
    },
    onSubmit: (data: ILoginBody) => {
      sendLogin(data)
    }
  });

  // @ts-ignore
  const isFormFieldValid = (name: string) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name: string) => {
    // @ts-ignore
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };
  return (
    <AuthPadding>
      <TitleAuth>Login</TitleAuth>
      <BodyAuth>
        <form onSubmit={formik.handleSubmit} style={{width: '100%'}}>
          <InputText
            label="Email*"
            name="email"
            handleChange={formik.handleChange}
            value={formik.values.email}
            isValid={isFormFieldValid('email')}
            displayedError={getFormErrorMessage('email')}
          />

          <InputPassword
            handleChange={formik.handleChange}
            value={formik.values.password}
            isValid={isFormFieldValid('password')}
            displayedError={getFormErrorMessage('password')}
          />
        </form>
        <Button
          color="yellow"
          onClick={formik.handleSubmit}
          width="120px"
          size={16}
        >Submit</Button>

      </BodyAuth>
    </AuthPadding>
  );
};

export default Login;
