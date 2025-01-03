import { useState } from "react"

const Login = () => {
  const [currentState, setCurrentState] = useState('ログイン画面');
  // prevent from reloading the page
  const onSubmitHandler = async(event) => {
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="mb-4 mt-10">
        <p className="text-3xl">{currentState}</p>
      </div>

      {currentState === 'ログイン画面' ? '' : <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="名前" required/>}
      <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="メールアドレス" required/>
      <input type="password" className="w-full px-3 py-2 border border-gray-800" placeholder="パスワード" required/>
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