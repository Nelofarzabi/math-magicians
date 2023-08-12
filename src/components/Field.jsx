import React from 'react';
import PropTypes from 'prop-types';
import './styles/field.css';

export default function Field(props) {
  const { result } = props;
  return (
    <>
      <section className="fieldValue">
        <p className="result">
          {result}
        </p>
      </section>
    </>
  );
}

Field.propTypes = {
  result: PropTypes.string.isRequired,
};
