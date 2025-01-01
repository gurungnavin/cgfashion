import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendURL, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const List = ({ token }) => {
  {/* Get data from database through api */ }

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {

      const response = await axios.get(backendURL + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products);
      }

      else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }
  {/* remove data from database through id */ }
  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendURL + '/api/product/remove', { id }, { headers: { token } })
      if (response.data.success) {
        toast.success('アイテムを削除しました。')
        {/* after deleting items, we have to display updated */ }
        await fetchList();
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <p className='mb-2'>すべてのアイテムリスト</p>

      <div className='flex flex-col gap-2'>
        {/* ----- List Table Title -------- */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>画像</b>
          <b>アイテム名</b>
          <b>カテゴリー</b>
          <b>価格</b>
          <b className='text-center'>操作</b>
        </div>

        {/* ----- Product list -------- */}

        {
          list.map((item, index) => (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
              <img className='w-12' src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price} {currency}</p>
              <img onClick={()=> removeProduct(item._id)} className='cursor-pointer w-5 md:justify-self-center' src={assets.delete_icon} alt="" />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default List