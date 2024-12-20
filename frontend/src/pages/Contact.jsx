import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewletterBox from '../components/NewsletterBox'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'Contact'} text2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
            <p>Our Store</p>
            <p>Shinagawa, Tokyo</p>
            <p>Tel: 030-1239-4567 <br /> Email: cogafashion@gmail.com</p>
            <p>Careers at Forever</p>
            <p>Learn more about our teams and job openings.</p> 
            <button className='border border-black px-12 py-4 text:sm hover:bg-black hover:text-white transition-all duration-500'>採用ページ</button>
        </div>
      </div>
      <NewletterBox />
    </div>
  )
}

export default Contact