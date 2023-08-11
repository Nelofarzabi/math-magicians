import React from 'react';
import values from './values';
import './styles/button.css';

export default function Button() {
  function data(text) {
    return <button key={text.id} type="button" className={text.className}>{text.value}</button>;
  }
  return (
    <>
      <section className="button">
        {
          values.map(data)
        }
      </section>
    </>
  );
}
