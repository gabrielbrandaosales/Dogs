import React from 'react';
import { ButtonForm } from './style';

const Button = ({ children, props }) => {
  return <ButtonForm {...props}>{children}</ButtonForm>;
};

export default Button;
