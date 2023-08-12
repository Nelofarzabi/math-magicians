import React from 'react';
import PropTypes from 'prop-types';
import values from './values';
import './styles/button.css';

export default function Button(props) {
  const { handleClick } = props;

  function data(text) {
    return <button key={text.id} type="button" onClick={handleClick} value={text.value} className={text.className}>{text.value}</button>;
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

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
