import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    products,
    delivery_fee,
    cartItems,
    setCartItems,
    getCartAmount,
    navigate,
    backendURL,
    token,
  } = useContext(ShopContext);

  // from the backend api(orders) to connect frontend, first we create state variable and
  // connect with input. Through input field, we will get data and pass to backend -> to database through api.
  const [formData, setFromData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipcode: "",
    district: "",
    city: "",
    street: "",
    building: "",
  });

  //to save these value on state variable, we create a function onChangeHandler.
  const onChangeHandler = (event) => {
    // we will get name property value of input field and save on the name variable.
    const name = event.target.name;
    // we also get value property in input field and save on value variable.
    const value = event.target.value;

    // Updates the formData by adding or changing the `[name]` field with the new `value`, keeping other fields unchanged.
    // actually logic is, it will copy data, and add new data on it, if firstName, it updated as new object having data as firstName.
    setFromData((data) => ({ ...data, [name]: value }));

    // now link to html tags input to get value.
  };

  // next step is, send these value to database as onSubmitHandler.

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      // address get from formData, items will be orderItmes and amount will add price + delivery fee
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };
      console.log(orderData);
      

      switch (method) {
        case "cod": {
          const response = await axios.post(
            backendURL + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          console.log(response);

          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;
        }
        default:
          break;
      }

      // switch method for different payment method.
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between"
    >
      {/* ============== leftSide ==================== */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"配信"} text2={"情報"} />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border border-gray-300 rounded py-1 px-3 w-full"
            type="text"
            placeholder="性 (Last Name)"
          />
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border border-gray-300 rounded py-1 px-3 w-full"
            type="text"
            placeholder="名 (First Name)"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border border-gray-300 rounded py-1 px-3 w-full"
          type="email"
          placeholder="メールアドレス"
        />
        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="border border-gray-300 rounded py-1 px-3 w-full"
          type="number"
          placeholder="電話番号"
        />
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="border border-gray-300 rounded py-1 px-3 w-full"
            type="number"
            placeholder="〒 000-0000"
          />
          <input
            required
            onChange={onChangeHandler}
            name="district"
            value={formData.district}
            className="border border-gray-300 rounded py-1 px-3 w-full"
            type="text"
            placeholder="都道府県"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="city"
          value={formData.city}
          className="border border-gray-300 rounded py-1 px-3 w-full"
          type="text"
          placeholder="市区町村"
        />
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border border-gray-300 rounded py-1 px-3 w-full"
          type="text"
          placeholder="町域番地"
        />
        <input
          required
          onChange={onChangeHandler}
          name="building"
          value={formData.building}
          className="border border-gray-300 rounded py-1 px-3 w-full"
          type="text"
          placeholder="建物名・号室"
        />
      </div>

      {/* ============== leftSide ==================== */}
      <div className="flex flex-col gap-4">
        <div className="mt-8">
          <div className="mt-8 min-w-80">
            <CartTotal />
          </div>
        </div>

        {/* ----for payment methon(お支払方法) ------- */}
        <div className="mt-12">
          <Title text1={"お支払"} text2={"方法"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("dbarai")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "dbarai" ? "bg-red-600" : ""
                }`}
              ></p>
              <img className="h-5" src={assets.dbarai_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("paypay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "paypay" ? "bg-yellow-500" : ""
                }`}
              ></p>
              <img className="h-5" src={assets.paypay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-600" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          {/* button div */}
          <div className="w-full text-end mt-8">
            {/* navigate to the order page with using of useNavate hook of useContext */}
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm"
            >
              注文する
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
