import React from 'react';
import {AuthPadding, TitleAuth, BodyAuth} from './styled'
import Button from "../UI/Button";
import {Context} from "../../pages/AuthPage";


const Auth = () => {
  const {changePage} = React.useContext(Context)
  return (
    <AuthPadding>
      <TitleAuth>AUTOMASTER</TitleAuth>
      <BodyAuth>
        <Button
          size={25}
          color="yellow"
          width="100%"
          onClick={() => changePage(1)}
        >
          LOGIN
        </Button>
        <Button
          size={25}
          color="grey"
          width="100%"
          onClick={() => console.log(1)}
        >
          REGISTER
        </Button>
      </BodyAuth>
    </AuthPadding>
  );
};

export default Auth;
