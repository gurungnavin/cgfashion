import { v2 as cloudinary } from 'cloudinary'
import productModel from '../models/productModel.js'

// function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      image,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;
    //if both properties it available(empty or image file)
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    // to remove the undefined message if image is empty.
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );


    let imageURL = await Promise.all(
      images.map(async(item) => {
        let result = await cloudinary.uploader.upload(item.path, {resource_type: image});
        return result.secure_url
      })
    )
    
    // save the product details and IMG url from cloudinary

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestSeller : bestSeller === 'true' ? true : false,
      sizes: JSON.parse(sizes),
      image: imageURL,
      date : Date.now()
    }

    let product = new productModel(productData);
    await product.save();
    

    res.json({success: true, message : "product updated successfully"});
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for total list product
const totalListProduct = async (req, res) => {};
// function for add product
const removeProduct = async (req, res) => {};
// function for add product
const singleProduct = async (req, res) => {};

export { addProduct, totalListProduct, removeProduct, singleProduct };
