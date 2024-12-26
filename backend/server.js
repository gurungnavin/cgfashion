import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connetDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';

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

app.get('/', (req, res)=> {
  res.send("API動作中、OK")
})

app.listen(port, ()=> console.log('Server started on PORT: '+ `localhost${port}`))
