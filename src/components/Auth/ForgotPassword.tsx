import React from 'react';
import { useFormik } from "formik";
import {
  AuthPadding,
  BodyAuth,
  ForgotTitle,
  ForgotSubtitle,
  AuthButtonGroup,
} from "./styled";
import InputText from "../UI/InputText";
import Button from "../UI/Button";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { regexEmail } from "../../utils/regex";
import {IForgotPassword} from "../../types/actions";
import {AuthContext} from "../../pages/AuthPage";
import { sendToEmailCode } from '../../store/actions/authActions';

const ForgotPassword = () => {
  const dispatch = useAppDispatch()
  const {changePage} = React.useContext(AuthContext)

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validate(date) {
      let errors: IForgotPassword = {}
      if (!date.email){
        errors.email = 'field is required'
      }
      else if (regexEmail(date.email)) {
        errors.email = 'Invalid email address. E.g. example@email.com';
      }
      return errors
    },
    onSubmit(data) {
      dispatch(sendToEmailCode(data))
    },
  })


  // @ts-ignore
  const isFormFieldValid = (name: string) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name: string) => {
    // @ts-ignore
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };

  return (
    <>
      <AuthPadding>
        <ForgotTitle className="p-2">Forgot password</ForgotTitle>
        <ForgotSubtitle className="p-2">Recovery instructions will be sent <br/>
          to your e-mail</ForgotSubtitle>
        <BodyAuth>
          <form onSubmit={formik.handleSubmit} style={{width: '100%'}}>
            <InputText
              handleChange={formik.handleChange}
              label="Email*"
              name="email"
              value={formik.values.email}
              isValid={isFormFieldValid('email')}
              displayedError={getFormErrorMessage('email')}
            />
          </form>
        </BodyAuth>
        <AuthButtonGroup>
          <Button
            color="yellow"
            onClick={formik.handleSubmit}
            width="200px"
            size={16}
          >Next</Button>
          <Button
            color="grey"
            onClick={() => changePage(1)}
            width="200px"
            size={16}
          >Go Back</Button>
        </AuthButtonGroup>
      </AuthPadding>
    </>

  );
};

export default ForgotPassword;
