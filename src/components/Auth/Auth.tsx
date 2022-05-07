import React from 'react';
import {AuthPadding, TitleAuth, BodyAuth} from './styled'
import Button from "../UI/Button";


const Auth = () => {
  return (
    <AuthPadding>
      <TitleAuth>AUTOMASTER</TitleAuth>
      <BodyAuth>
        <Button size={25} color="black" width="100%" onClick={() => console.log(1)}>LOGIN</Button>
        <Button size={25} color="white" width="100%" onClick={() => console.log(1)}>REGISTER</Button>
      </BodyAuth>
    </AuthPadding>
  );
};

export default Auth;
