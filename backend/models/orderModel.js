// first we import mongoose from mongoose
import mongoose from "mongoose";

// second schema create for order
const orderSchema = new mongoose.Schema({
    userId : {type: String, reuqired : true},
    items: {type: Array, reuqired: true},
    amount: {type : Number, reuqired: true},
    address: { type: Object, reuqired: true },
    status: { type: String, reuqired: true , default: 'Order Placed'},
    paymentMethod: {type: String, reuqired:true},
    payment: {type: Boolean, reuqire: true, default: false},
    date: {type: Number, reuqire: true}
})

// third, create orderModel for Schema and pass orderSchema through it.
const orderModel = mongoose.Model.order || mongoose.model('order', orderSchema)
// forth for export the orderModel
export default orderModel;

// next Step is orderController.