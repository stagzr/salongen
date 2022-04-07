import { useState } from 'react';
import clsx from 'clsx';
import Clock from './icons/Clock';
import Heart from './icons/Heart';
import Location from './icons/Location';
import Phone from './icons/Phone';
import Web from './icons/Web';
import Rating from './Rating';
import Style from './SalongDetalj.module.css';

const SalongDetalj = ({ currentSalong: salong, setCurrentSalong }) => {
  const [hide, setHide] = useState();

  return (
    <div
      className={clsx(
        Style.salongDetalj,
        salong && !hide && Style.show,
        hide && Style.hide
      )}
      onAnimationEnd={() => {
        if (hide) {
          setCurrentSalong(null);
          setHide(false);
        }
      }}
    >
      {salong && (
        <>
          <div className={Style.hero}>
            <div className={Style.link}>
              <div className={Style.arrow} onClick={() => setHide(true)}></div>
            </div>
            <div className={Style.heart}>
              <Heart />
            </div>
            <div className={Style.nameAndRating}>
              <div className={Style.name}>{salong.name}</div>
              <div className={Style.rating}>
                <Rating
                  rating={salong.rating}
                  amountOfReviews={salong.amountOfReviews}
                />
              </div>
            </div>
          </div>
          <div className={Style.menu}>
            <div className={clsx(Style.menuInfo, Style.menuItem)}>Info</div>
            <div className={clsx(Style.menuSchema, Style.menuItem)}>Schema</div>
          </div>

          <div className={clsx(Style.detail, Style.adress)}>
            <Location />
            {salong.adress}
          </div>
          <div className={clsx(Style.detail, Style.time)}>
            <Clock />
            {salong.openHours}
          </div>
          <div className={clsx(Style.detail, Style.phonenumber)}>
            <Phone />
            {salong.phone}
          </div>
          <div className={clsx(Style.detail, Style.executionTime)}>
            <Web />
            {salong.www}
          </div>
          <div className={clsx(Style.detail, Style.description)}>
            <div>{salong.description}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default SalongDetalj;
