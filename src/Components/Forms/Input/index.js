import React from 'react';
import { Wrapper } from './styles';

const Input = ({ label, type, name, value, onChange, onBlur, error }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="error">{error}</p>}
    </Wrapper>
  );
};

export default Input;
