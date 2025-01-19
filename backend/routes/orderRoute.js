// first, import express from express
import express from 'express'
// second, import all function from controller
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus } from '../controllers/orderController.js'
// third, for authentication of adminPanel, import adminAuth from middleware
import adminAuth from '../middleware/adminAuth.js'

// this middleware is for frontend authentication
import authUser from '../middleware/auth.js'

// Forth, create orderRouter with express
const orderRouter = express.Router()

// Fifth, with orderRouter, we are creating multiple end points

// ========== Admin Features end-points
//5.1 with this end point, we get all order of list in adminPanel. Also auth is required
//5.1.1 end-point: list, Authentication: adminAuth, then allOrders function and get all orders list.
orderRouter.post('/list', adminAuth, allOrders)

//5.2 this end-point for change status of order(shipped->delivery so on...)
orderRouter.post('/status', adminAuth, updateStatus)


// ========== Payment Features end-points
orderRouter.post('/place', authUser, placeOrder)

orderRouter.post('/stripe', authUser, placeOrderStripe)

orderRouter.post('/razorpay', authUser, placeOrderRazorpay)


// User Features

orderRouter.post('/userorders', authUser, userOrders)

// at Last we have to export orderRouter. And add to server.js file

export default orderRouter