import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  image: {type: Array, required: true},
  category: {type: String, required: true},
  subCategory: {type: String, required: true},
  sizes: {type: Array, required: true},
  bestSeller: {type: Boolean},
  date: {type: Number, required: true},
})

// If the product model already exists, it reuses it (mongoose.models.product). If not, it creates a new model using the productSchema.
const productModel = mongoose.Model.product || mongoose.model("product", productSchema)

export default productModel;