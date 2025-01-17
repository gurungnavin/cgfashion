import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connetDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js'

// App Config
const app = express();
const port = process.env.PORT || 4000

// middlewares
app.use(express.json())
app.use(cors())
connetDB()
connectCloudinary()

// api endpoints 
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// after router, we have to create middleware
app.get('/', (req, res)=> {
  res.send("API動作中、OK")
})

app.listen(port, ()=> console.log('Server started on PORT: '+ `localhost${port}`))
