import PropTypes from 'prop-types';
import Rating from './Rating';
import Style from './Salong.module.css';

const Salong = ({ data: salong, setCurrentSalong }) => {
  return (
    <div className={Style.salong} onClick={() => setCurrentSalong(salong)}>
      <div className={Style.time}>{salong.time}</div>
      <div className={Style.name}>{salong.name}</div>
      <div className={Style.rating}>
        <Rating
          rating={salong.rating}
          amountOfReviews={salong.amountOfReviews}
        />
      </div>
      <div className={Style.adress}>{salong.adress}</div>
      <div className={Style.price}>{salong.price}kr</div>
      <div className={Style.executionTime}>{salong.executionTime}</div>
      <div className={Style.link}>
        <div className={Style.arrow}></div>
      </div>
    </div>
  );
};

Salong.propTypes = {
  salong: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    time: PropTypes.string,
    executionTime: PropTypes.string,
    rating: PropTypes.number,
    amountOfReviews: PropTypes.number,
    adress: PropTypes.string,
    executionTime: PropTypes.string,
  }),
};

export default Salong;
