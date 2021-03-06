import React from 'react';
import {IButton} from "../../../types/UI/IButton";
import {Button as ButtonComponent} from "./styled";

const Button = ({
  onClick,
  children,
  color,
  width = '100px',
  size = 14
}: IButton) => {
  return (
    <ButtonComponent
      width={width}
      color={color}
      onClick={onClick}
      type="submit"
      style={{fontSize: size}}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
