import React from 'react';
import { Section } from './styles';
import Feed from '../Feed';
import Loading from '../Helper/Loading';
const Home = () => {
  return (
    <Section className="container mainContainer">
      <Feed />
    </Section>
  );
};

export default Home;
