import { useContext, useEffect, useState } from "react"
import { ShopContext } from '../context/ShopContext'
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState('ログイン画面');

  const { token, setToken, navigate, backendURL } = useContext(ShopContext)

  // we want to store name, email and password of sign up display and link to the input field;
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // prevent from reloading the page
  const onSubmitHandler = async(event) => {
    event.preventDefault();
    try {
      // is signup that this api will called otherwise login
        if (currentState === '登録画面') {
          const response = await axios.post(backendURL + '/api/user/register', {name, email, password})
          if(response.data.success) {
            // if the success, we will get token, now the token store in token by setToken
            setToken(response.data.token);
            // also store in localStorage to prevent from refresh browser
            localStorage.setItem('token', response.data.token)
          }
          else {
            toast.error(response.data.message)
          }
        // is state is not signup then login 
        }
        else {
          const response = await axios.post(backendURL + '/api/user/login', {email, password})
          if(response.data.success){
            // if the login is succeed, we will get token, now the token store in token by setToken
            setToken(response.data.token);
            //in login, we have to also store in localStorage to prevent from refresh browser
            localStorage.setItem('token', response.data.token)
          }
          else {
            toast.error(response.data.message)
          }
        }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }

  // if login or signup successfully, navigate to the home section automatically
  useEffect(()=> {
    if(token) {
      navigate('/')
    }
  },[token])
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="mb-4 mt-10">
        <p className="text-3xl">{currentState}</p>
      </div>

      {currentState === 'ログイン画面' ? '' : <input onChange={(e)=> setName(e.target.value)} value={name} type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="名前" required/>}
      <input onChange={(e)=> setEmail(e.target.value)} value={email} type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="メールアドレス" required/>
      <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" className="w-full px-3 py-2 border border-gray-800" placeholder="パスワード" required/>
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer underline text-red-600">パスワードをお忘れの方</p>
        {
          currentState === 'ログイン画面'
          ? <p onClick={()=> setCurrentState('登録画面')} className="cursor-pointer text-blue-600 underline">アカウントをお持ちでない方</p>
          : <p onClick={()=> setCurrentState('ログイン画面')} className="cursor-pointer text-blue-600 underline">ログインページに戻る</p>
        }
      </div>
      <button className="bg-black text-white py-2 px-12">
        {
        currentState === 'ログイン画面' ? 'ログイン' : 'サインアップ'
        }
      </button>
    </form>
  )
}

export default Login