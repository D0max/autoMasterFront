import React from 'react';
import {MainHeader, HeaderButtons, NavigationMenu} from './styled'
import { Avatar } from 'primereact/avatar';
import {NavLink} from "react-router-dom";
import Button from "../UI/Button";
import Logo from '../UI/Logo';
import { ROLES } from '../../utils/hasPermission';

const Header = (props: any) =>{
  const {profile} = props;
  return (
    <MainHeader>
      <Logo/>
      <NavigationMenu>
        <NavLink to='/maps'>MAPS</NavLink>
        <NavLink to='/services'>SERVICES</NavLink>
        {!profile.role.includes(ROLES.DEFAULT) && (
          <>
            <NavLink to='/users'>USERS</NavLink>
          </>
        )}
        {profile.role.includes(ROLES.ADMIN) && (
          <>
            <NavLink to='/admin'>ADMIN</NavLink>
          </>
        )}

      </NavigationMenu>
      <HeaderButtons>
        {profile && (
          <NavLink to="/profile">
            <Avatar label="P" shape="circle"/> {profile.username}
          </NavLink>
        )}
        {!profile ? (
          <NavLink to="/sign_in">
            Sing in <i className="pi pi-sign-in"/>
          </NavLink>
        ): (
          <Button color="link" onClick={() => console.log(1)} width="100px">
            Log out <i className="pi pi-sign-out"/>
          </Button>
        )}

      </HeaderButtons>
    </MainHeader>
  );
};

export default Header;
