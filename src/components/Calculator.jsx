import React, { useState } from 'react';
import Button from './Button';
import Field from './Field';
import calculate from '../logic/calculate';
import './styles/calculator.css';

export default function Calculator() {
  const [state, setState] = useState({
    total: '0',
    next: null,
  });
  const handleClick = (e) => {
    setState(calculate(state, e.target.innerText));
  };

  const { total, next } = state;
  let result = '0';
  result = next || total;

  return (
    <>
      <div className="container">
        <Field result={result} />
        <Button handleClick={handleClick} />
      </div>
    </>
  );
}
