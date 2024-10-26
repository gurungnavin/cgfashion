import { assets } from '../assets/assets' 
const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row border border-gray-400'>
        <div className='w-full md:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>人気商品ランキング</p>
                </div>
                <h1 className='zen-kurenaido-regular text-3xl sm:py-4 lg:text-5xl leading-relaxed'>新入商品</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-medium text-sm md:text-base'>今すぐチェック！</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
        <img className='w-full h-[250px] md:h-[350px] lg:h-[420px] 2xl:h-[560px] object-cover object-top md:w-1/2' src={assets.hero_img} alt="hero-img" />
    </div>
  )
}

export default Hero