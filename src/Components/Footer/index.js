import React from 'react';
import { FooterContainer } from './styles';
import { ReactComponent as Dogs } from '../../Assets/dogs-footer.svg';
const Footer = () => {
  return (
    <FooterContainer>
      <Dogs />
      <p>Dogs. Alguns direitos reservados</p>
    </FooterContainer>
  );
};

export default Footer;
