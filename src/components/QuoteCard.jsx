import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ person }) => (
  <figure className="QuoteCard">
    <img src={person.image} alt={person.character} />
    <figcaption>
      <blockquote>{person.quote}</blockquote>
      <cite>{person.character}</cite>
    </figcaption>
  </figure>
);

export default QuoteCard;
