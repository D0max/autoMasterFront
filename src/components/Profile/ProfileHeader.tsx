import React from 'react';
import {Avatar} from "primereact/avatar";
import {ProfileHeaderComponent} from "./styles";

const ProfileHeader = ({username}: any) => {
  return (
    <ProfileHeaderComponent>
      <Avatar size="large" shape="circle"/>
      <span>{username}</span>
    </ProfileHeaderComponent>
  );
};

export default ProfileHeader;
