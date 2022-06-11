import React from 'react';
import styled from "styled-components";
import Auth from "../components/Auth";
import Login from "../components/Auth/Login";
import Registration from "../components/Auth/Registration";
import ForgotPassword from "../components/Auth/ForgotPassword";

const BackgroundAuth = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: rgba(38, 41, 48, 1);
`;

const ContainerAuth = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  background: rgba(48, 55, 63, 1);
  border-radius: 12px;
  @media (max-width: 768px) {
    width: calc(90% - 50px);
  }
`;

const authComponents: any = {
  0: <Auth/>,
  1: <Login/>,
  2: <Registration/>,
  3: <ForgotPassword/>
}

export const AuthContext = React.createContext({
  changePage: (number: number) => {},
})

const AuthPage = () => {
  const [auth, setAuth] = React.useState<number>(0);

  const changePage = React.useCallback((number: number) => {
    setAuth(number)
  }, [setAuth]);

  return (
    <AuthContext.Provider value={{changePage}}>
      <BackgroundAuth>
        <ContainerAuth>
          {authComponents[auth]}
        </ContainerAuth>
      </BackgroundAuth>
    </AuthContext.Provider>
  );
};

export default AuthPage;
