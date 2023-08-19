import React from 'react';
import PropTypes from 'prop-types';
import './styles/quotes.css';

export default function Quotes(props) {
  const { text, author } = props;

  return (
    <>
      <section className="quotes">
        <q>{text}</q>
        <p className="author">
          <i>
            {author}
          </i>
        </p>
      </section>
    </>
  );
}

Quotes.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
