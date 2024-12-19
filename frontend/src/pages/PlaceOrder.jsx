import { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between'>
      {/* ============== leftSide ==================== */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'配信'} text2={'情報'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='性 (Last Name)' />
          <input className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='名 (First Name)' />
        </div>
        <input className='border border-gray-300 rounded py-1 px-3 w-full' type="email" placeholder='メールアドレス' />
        <input className='border border-gray-300 rounded py-1 px-3 w-full' type="number" placeholder='電話番号' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1 px-3 w-full' type="number" placeholder='〒 000-0000' />
          <input className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='都道府県' />
        </div>
        <input className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='市区町村' />
        <input className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='町域番地' />
        <input className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='建物名・号室' />
      </div>

      {/* ============== leftSide ==================== */}
      <div className='flex flex-col gap-4'>
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
      </div>

      {/* ----for payment methon(お支払方法) ------- */}
      <div className="mt-12">
        <Title text1={'お支払'} text2={'方法'} />
        <div className='flex gap-3 flex-col lg:flex-row'>
          <div onClick={()=>setMethod('dbarai')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'dbarai' ? 'bg-red-600' : ''}`}></p>
            <img className='h-5' src={assets.dbarai_logo} alt="" />
          </div>
          <div onClick={()=>setMethod('paypay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'paypay' ? 'bg-yellow-500' : ''}`}></p>
            <img className='h-5' src={assets.paypay_logo} alt="" />
          </div>
          <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-600' : ''}`}></p>
            <p className='text-gray-500 text-sm font-medium'>CASH ON DELIVERY</p>
          </div>
        </div>
        {/* button div */}
        <div className='w-full text-end mt-8'>
          {/* navigate to the order page with using of useNavate hook of useContext */}
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>注文する</button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default PlaceOrder