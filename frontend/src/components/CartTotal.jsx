import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'


const CartTotal = () => {
  const {currency, delivery_fee, getCartAmount} = useContext(ShopContext)
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'カート'} text2={'合計'}/>
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>小計</p>
          <p>{getCartAmount()}.00 {currency}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>配送料・手数料：</p>
          <p>{delivery_fee}{currency}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>合計</b>
          <b>{getCartAmount() === 0 ? 0 : getCartAmount()+ delivery_fee}.00 {currency}</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal