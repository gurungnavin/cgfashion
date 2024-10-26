const NewsletterBox = () => {
    const onSubmitHandler = (e) => {
        //this will prevent from reload the page.
        e.preventDefault();
    }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your Email" required/>
        <button onClick={onSubmitHandler} className="bg-black text-white text-xs py-4 px-10">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterBox;
