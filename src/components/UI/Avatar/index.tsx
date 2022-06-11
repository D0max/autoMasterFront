import React from 'react';
import {Avatar} from "primereact/avatar";

const AvatarComponent = (props: { image: string; }) => {
  let image = null;

  if (props.image) {
    image = process.env.BASE_URL + '/uploads/' + props.image;
  }
  return (
    <Avatar size="large" shape="circle" image={image}/>
  );
};

export default AvatarComponent;
