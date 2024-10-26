import {assets} from '../assets/assets'
const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="exchagne icon" />
        <p className='font-semibold'>簡単な交換ポリシー</p>
        <p className='text-gray-400'>手間のかからない交換ポリシーをご提供します。</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="exchagne icon" />
        <p className='font-semibold'>7日間の返品ポリシー</p>
        <p className='text-gray-400'>7日間の無料返品ポリシーを提供します。</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.support_img} alt="exchagne icon" />
        <p className='font-semibold'>ベストカスタマーサポート</p>
        <p className='text-gray-400'>we provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
