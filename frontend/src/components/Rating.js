import React from 'react';
import PropTypes from 'prop-types';

function Rating({ value, text, color = '#f8e825' }) {
  return (
    <div className='rating'>
      {[1, 2, 3, 4, 5].map((num) => (
        <span key={num}>
          <i
            style={{ color }}
            className={
              value >= num
                ? 'fas fa-star'
                : value >= num - 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
      ))}
      <span>{text && text}</span>
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
