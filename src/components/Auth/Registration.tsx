import React from 'react';
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {useFormik} from "formik";
import {AuthPadding, TitleAuth, BodyAuth} from "./styled";
import InputText from "../UI/InputText";
import InputPassword from "../UI/InputPassword";
import {IRegistrationBody} from "../../types/actions";
import Button from "../UI/Button";
import { objEmptyRemover } from '../../utils/objEmptyRemover';
import {registrationAction} from "../../store/actions/authActions";

const Registration = () => {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validate: (data) => {
      let error: IRegistrationBody = {}
      if (!data.email) {
        error.email = 'Field required'
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        error.email = 'Invalid email address. E.g. example@email.com';
      }
      if (!data.password) {
        error.password = 'Password is required.';
      }

      if (data.username && (data.username.length !== 0 && data.username.length < 3)) {
        error.username = 'Password length must be greater than 3';
      }

      if (data.password.length < 3) {
        error.password = 'Password length must be greater than 3'
      }
      return error
    },
    onSubmit(data) {
      dispatch(registrationAction(objEmptyRemover(data)))
    }
  })


  // @ts-ignore
  const isFormFieldValid = (name: string) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name: string) => {
    // @ts-ignore
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };

  return (
    <AuthPadding>
      <TitleAuth>Registration</TitleAuth>
      <BodyAuth>
        <form style={{width: '100%'}}>
          <InputText
            label="Email*"
            name="email"
            handleChange={formik.handleChange}
            value={formik.values.email}
            isValid={isFormFieldValid('email')}
            displayedError={getFormErrorMessage('email')}
          />

          <InputText
            label="Username"
            name="username"
            handleChange={formik.handleChange}
            value={formik.values.username}
            isValid={isFormFieldValid('username')}
            displayedError={getFormErrorMessage('username')}
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

export default Registration;
