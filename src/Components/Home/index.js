import React from 'react';
import { Section } from './styles';
import Feed from '../Feed';
import Head from '../Helper/Head';
const Home = () => {
  return (
    <Section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos"
      />
      <Feed />
    </Section>
  );
};

export default Home;
