import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing order using COD method.

const placeOrder = async (req, res) => {
  // in try, we will get userId, items, amount, address from request of body(from frontend)
  try {
    const { userId, items, amount, address } = req.body;
    // after getting items, amount & address and add token on headers to get userId.

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "cod",
      payment: false,
      date: Date.now(),
    };

    //using the orderData, we create new order.
    const newOrder = new orderModel(orderData);

    // next step is, save newOrder to database

    await newOrder.save();

    // after saving the order, we have to clear the history data(to reset cart).
    // cartData as object which is empty.
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    // after all the process we have to create response for confirmation message
    res.json({ success: true, message: "Order Placed" });

    // if there is any error or above logic or process catch will be display or throw error message
    // And last, integrate or connect or join with frontend through api.
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Placing order using Stripe
const placeOrderStripe = async (req, res) => {};

// Placing order using Razorpay
const placeOrderRazorpay = async (req, res) => {};

// All orders data for Admin Panel

const allOrders = async (req, res) => {
 
};

// User Order Data for Frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Update Status of order from admin panel(only admin can change)

const updateStatus = async (req, res) => {};

//now export all functions
export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};

// Now, using these function, next step is to crate a route of each on routes folder(orderRoute.js)
