import axios from 'axios'
import React, { useState } from 'react'
import { backendURL } from '../App'
import { toast } from 'react-toastify'


const Login = ({setToken}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async(e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendURL + '/api/user/adminPanel', {email, password})
      if(response.data.success) {
        setToken(response.data.token)
      } else {
        toast.error('ログイン情報が間違っています')
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }


  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-center text-2xl font-bold mb-4'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>メールアドレス</p>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='メールを入力してください。' required />
          </div>

          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>パスワード</p>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='パスワード' required />
          </div>
         
          <button className='mt-2 w-full py-2 px-4 rounded-md bg-black text-white' type='submit'>ログイン</button>
        </form>
      </div>
    </div>
  )
}

export default Login