import Image from 'next/image';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Trophy from '../../../public/assets/Assets_home/Trophy.svg';

function PrizePool() {
  const prizePoolData = [
    {
      PrizeIcon: Trophy,
      PrizeText: 'Prize Pool of',
      TotalPrice: '$100,000',
    },
  ];

  return (
    <div>
      {prizePoolData.map((item, index) => (
        <div className="flex flex-col gap-0" key={index}>
          <div className="flex items-end justify-center ml-[-36px] gap-3">
            <Image src={Trophy} alt="Trophy" width={40} height={40} />
            <span className="font-HeroSans text-[28px] font-[600]">{item.PrizeText}</span>
          </div>
          <div>
            <h2
              className="font-bold lg:text-[85px] text-[36px] font-Hanson text-[#ffdf00]"
            >
              {item.TotalPrice}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

PrizePool.propTypes = {
  PrizeText: PropTypes.string,
  TotalPrice: PropTypes.string,
};

export default PrizePool;
