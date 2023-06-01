import Image from 'next/image';
import Trophy from '../../../public/assets/Assets_home/Trophy.svg';
import PropTypes from 'prop-types';

function PrizePool() {
  const prizePoolData = [
    {
      PrizeIcon: Trophy,
      PrizeText: "Prize Pool of",
      TotalPrice: '$100,000'
    }
  ];

  return (
    <div>
      { prizePoolData && prizePoolData.map((item, index) => (
        <div className='flex flex-col gap-0' key={index}>
          <div className='flex items-end gap-3'>
            <Image src={item.PrizeIcon.src} alt='Trophy' width={35} height={35} />
            <span className='font-HeroSans text-[18px] font-[600]'>{item.PrizeText}</span>
          </div>
          <div>
            <h2 className='font-bold text-[32px] font-Hanson'>{item.TotalPrice}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

PrizePool.propTypes = {
  PrizeIcon: PropTypes.object.isRequired,
  PrizeText: PropTypes.string.isRequired,
  TotalPrice: PropTypes.string.isRequired
};

export default PrizePool;
