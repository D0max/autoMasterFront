import styled from 'styled-components'

export const MainHeader = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 41, 48, 1);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const HeaderButtons = styled.div`
  margin: 25px 20px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  a {
    color: #ffffff;
    text-decoration: none;
    transition: .5s;
    i {
      margin-left: 5px;
    }
    &:hover {
      opacity: .8;
    }
    :first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;
      & > div {
      }
    }
  }
  & > button i {
    margin-left: 5px;
  }
`;

export const LogoComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > a {
    color: #fff;
    font-size: 30px;
    text-decoration: none;
  }
`;

export const NavigationMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > a {
    margin-bottom: 10px;
    width: 9.5rem;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
  }
`;


