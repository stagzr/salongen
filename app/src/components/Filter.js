import { useState } from 'react';
import clsx from 'clsx';
import MultiRangeSlider from 'multi-range-slider-react';
import PropTypes from 'prop-types';
import Style from './Filter.module.css';
import './PriceSlider.css';

/**
 * Uses external library for range slider.
 *
 * https://www.npmjs.com/package/multi-range-slider-react
 */

const Filter = ({ minPrice, maxPrice, setPriceRange }) => {
  const [minValue, set_minValue] = useState(minPrice);
  const [maxValue, set_maxValue] = useState(maxPrice);
  const [showFilter, setShowFilter] = useState(false);

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
    setPriceRange({ min: e.minValue, max: e.maxValue });
  };

  return (
    <div className={Style.filter}>
      <div className={Style.filterInfo}>
        <div className={Style.summary}>
          {`Pris ${minPrice} - ${maxPrice} kr`}
        </div>
        <div
          className={clsx(Style.toggle, showFilter && Style.toggleShowing)}
          onClick={() => setShowFilter(!showFilter)}
        ></div>
      </div>
      <div
        className={clsx(Style.filterPrice, showFilter && Style.showFilterPrice)}
      >
        <MultiRangeSlider
          min={0}
          max={500}
          step={50}
          ruler={false}
          label={false}
          preventWheel={false}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
          baseClassName={"priceSlider"}
        />
      </div>
    </div>
  );
};

Filter.propTypes = {
  rating: PropTypes.number,
  amountOfVoters: PropTypes.string,
};

export default Filter;
