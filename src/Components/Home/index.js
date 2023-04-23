import React from 'react';
import { Section } from './styles';
import Feed from '../Feed';
const Home = () => {
  return (
    <Section className="container mainContainer">
      <Feed />
    </Section>
  );
};

export default Home;
