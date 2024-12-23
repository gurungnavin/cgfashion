const NewsletterBox = () => {
    const onSubmitHandler = (e) => {
        //this will prevent from reload the page.
        e.preventDefault();
    }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
      今すぐ購読して20%オフ！
      </p>
      <p className="text-gray-400 mt-3">
      限定オファー！今すぐ購読して、次回のお買い物で20%オフをゲット。最新商品情報や特別割引をお届けします。お見逃しなく！
      </p>
      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your Email" required/>
        <button onClick={onSubmitHandler} className="bg-black text-white text-xs py-4 px-10">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterBox;
