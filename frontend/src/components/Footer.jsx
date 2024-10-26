import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col item sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="w-36 mb-5" alt="logo image" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            laudantium laborum unde voluptatum omnis sunt, repellat vero,
            perferendis necessitatibus beatae incidunt qui similique culpa
            eveniet, labore corporis fugit voluptatem accusantium sed
            repudiandae. Nulla deleniti maiores sapiente explicabo obcaecati
            nesciunt. Odio exercitationem magnam.
          </p>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">OUR COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">お問い合わせ</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+81 303-4396-7894</li>
                <li>cogafashion@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ cogafashion.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
