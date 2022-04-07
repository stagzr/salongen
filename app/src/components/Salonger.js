import { useState } from 'react';
import Filter from './Filter';
import Config from './icons/Config';
import Salong from './Salong';
import SalongDetalj from './SalongDetalj';
import Style from './Salonger.module.css';

export const getMinAndMaxPrice = (salonger) => {
  const sorted = salonger.map((salong) => salong.price).sort();
  return { max: sorted.pop(), min: sorted.reverse().pop() };
};

const Salonger = ({ data }) => {
  const initialPriceRange = getMinAndMaxPrice(data);

  const [currentSalong, setCurrentSalong] = useState();
  const [priceRange, setPriceRange] = useState(initialPriceRange);

  return (
    <>
      <div className={Style.header}>
        <div className={Style.back}></div>
        <div className={Style.title}>Hår</div>
        <div className={Style.config}>
          <Config />
        </div>
      </div>
      <Filter
        minPrice={priceRange.min}
        maxPrice={priceRange.max}
        setPriceRange={setPriceRange}
      />
      <ul className={Style.ul}>
        {data
          .filter(
            (salong) =>
              salong.price <= priceRange.max && salong.price >= priceRange.min
          )
          .map((salong, index) => {
            return (
              <li key={index}>
                <Salong data={salong} setCurrentSalong={setCurrentSalong} />
              </li>
            );
          })}
      </ul>
      <SalongDetalj
        currentSalong={currentSalong}
        setCurrentSalong={setCurrentSalong}
      />
    </>
  );
};

export default Salonger;
