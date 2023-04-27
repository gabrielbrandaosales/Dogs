import React, { useEffect, useState } from 'react';
import { Section } from './styles';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(data);
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
    );
  }, [data]);

  return (
    <Section className="animeLeft">
      <div className="total">
        <p>Acessos: {total}</p>
      </div>
    </Section>
  );
};

export default UserStatsGraphs;
