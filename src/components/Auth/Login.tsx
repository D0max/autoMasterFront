import React, {useCallback} from 'react';
import {AuthPadding, BodyAuth, TitleAuth} from './styled'
import Input from "../UI/Input";
import Button from "../UI/Button";
import {login} from "../../store/actions/authActions";
import {useAppDispatch} from "../../hooks/useAppDispatch";

const Login = () => {
  const dispatch = useAppDispatch()
  const [state, setState] = React.useState({
    username: '',
    password: '',
  })
  const sendLogin = useCallback(() => {
    dispatch(login(state))
  }, [dispatch, state])

  const changeHandler = (e: any) => {
    const {name, value} = e.target
    setState(prev => ({...prev, [name]: value }))
  }
  return (
    <AuthPadding>
      <TitleAuth>Login</TitleAuth>
      <BodyAuth>
        <Input
          label="Username"
          name="username"
          onChange={(e: any) => changeHandler(e)}
        />
        <Input
          label="Password"
          name="password"
          onChange={(e: any) => changeHandler(e)}
        />
        <Button
          color="yellow"
          onClick={sendLogin}
          width="120px"
          size={16}
        >Submit</Button>
        <button onClick={sendLogin}>test</button>
      </BodyAuth>
    </AuthPadding>
  );
};

export default Login;
