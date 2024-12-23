In Backend
create folder(backend) -> create file(server.js)->npm init(Terminal)->And just press 'Enter'. -> generate package.json file.

Install dependencies

1. cors
Usage: Lets your frontend and backend communicate with each other, even if they are on different servers.

2. dotenv
Usage: Helps you store sensitive information like API keys or passwords in a .env file so they don't appear in your code.

3. express
Usage: A tool that helps you create a server and build web applications quickly and easily.

4. jsonwebtoken
Usage: Creates secure tokens that help confirm a user’s identity (used for login systems).

5. mongoose
Usage: Helps you interact with MongoDB (a type of database) easily using JavaScript.

6. multer
Usage: Helps you handle file uploads, like images or documents, from the user to your server.

7. nodemon
Usage: Automatically restarts your server when you make changes to your code, making development faster.

8. validator
Usage: Checks if the information entered by a user, like an email or phone number, is in the right format.

9. cloudinary
Usage: A service to store and manage images and videos in the cloud, making it easy to display them in your app.

10. bcrypt
Usage: Helps you safely store passwords by turning them into a format that's hard to reverse.



FOLDER STRUCTURE:
1. config folder: store all the configuration
2. middleware: store backend middleware
3. models: store the model mongoose
4. controllers: manage all the logic of backend.
5. routes: we will manage the express server route.

Below the start(inside the package.json)
add "server": "nodemon server.js"

Belwo the "main"(inside the package.json)
add "type": "module"
it allow us import statement.


[x] SERVER.JS file

crate basic server.

import express form 'express'
import cors from 'cors'
import 'dotenv/config'

// middlewares 
// api endpoints >> server.js
app.use(express.json())
"whatever we get will convert into json file."
app.use(cors())
"we can access backend from any IP"


// api endpoints >> server.js

app.get('/', (req, res)=> {
  res.send("API working")
})
we have created one end point, when we open localhost 4000, it will display 'Api working'

TO start express server.
app.listen(port, ()=> console.log('Server started on PORT: '+ `localhost${port}`))

and in Terminal "npm run server"

 
[x] Create .env file
we can store the secret key or api keys.
inside the .env

MONGODB_URI with password.
※Thunder Client(vsCode extension) will be helpful to test API.