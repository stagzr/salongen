import PropTypes from 'prop-types';
import Style from './Rating.module.css';

const Rating = ({ rating, amountOfReviews }) => {
  return (
    <div className={Style.rating}>
      {[...Array(5)].map((x, index) => {
        return <Star filled={index < rating} />;
      })}
      <span className={Style.amountOfVoters}>({amountOfReviews})</span>
    </div>
  );
};

/**
 * SVG source: https://commons.wikimedia.org/wiki/File:Five-pointed_star.svg
 */
const Star = ({ filled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="255"
      height="240"
      viewBox="0 0 51 48"
    >
      <path
        fill={filled ? "#b8860b" : "none"}
        stroke="black"
        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
      />
    </svg>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
  amountOfVoters: PropTypes.string,
};

export default Rating;
