import React from 'react';
import styled from "styled-components";
import Auth from "../components/Auth/Auth";

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
  0: <Auth/>
}

const AuthPage = () => {
  const [auth, setAuth] = React.useState<number>(0)
  console.log()
  return (
    <BackgroundAuth>
      <ContainerAuth>
        {authComponents[auth]}
      </ContainerAuth>
    </BackgroundAuth>
  );
};

export default AuthPage;
