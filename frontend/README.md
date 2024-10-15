1. create folder as "cgfashion"
2. open in vs code & open in terminal
3. run command "npm create vite@latest" on terminal
4. project name: frontend
5. cd frontend
6. npm install
7. npm run dev
8. copy Local: http://localhost:5173/


9. install react router and react toastify
   ```
    npm install react-router-dom
   ```
    - react-router-dom helps you switch between pages in a React app without refreshing the page.
   ```
   npm install --save react-toastify
   ```
    - React-Toastify allows you to add notifications to your app with ease. No more nonsense!
    https://www.npmjs.com/package/react-toastify
    (we can install both with same command: npm install react-route-dom react-toastify)

10. For Reset
 - delete index.css
 - assest/.svg file
 - clear index.css
 - public/index.html -> change the title

11. Add assets(products images etc...)
12. install TailwindCSS
  - COPY & PASTE on terminal
  ```
  npm install -D tailwindcss postcss autoprefixer
  ```
  ```
  npx tailwindcss init -p
  ```

   - Copy and paste the below code on tailwind.config.js
  
  ```
  /** @type {import('tailwindcss').Config} */
  export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
    extend: {},
    },
   plugins: [],
  }
  ```

  - In index.css (copy & paste the below codes)

  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

13. Now, create folder structure
  - src/components 
  - src/pages
  - src/context 

14. In pages folders(create 9 files)
 - Home.jsx
 - About.jsx
 - Cart.jsx
 - Collection.jsx
 - Contact.jsx
 - Login.jsx
 - PlaceOrder.jsx
 - Orders.jsx
 - Product.jsx

15. Setup React Router
 - In main.jsx
   * Replace `<StrictMode>` to `<BrowserRouter>`
   * import {BrowerRouter} from 'react-router-dom'

    ```
    import { createRoot } from 'react-dom/client'; // Keep only what's necessary
    import { BrowserRouter } from 'react-router-dom';
    import App from './App.jsx';
    import './index.css';

    const root = createRoot(document.getElementById('root'));
    root.render(
      <BrowserRouter>
       <App />
      </BrowserRouter>,
    );

    ```

16. Setup `<Routes /> and <Route>` on App.jsx
  - import { Routes, Route} from 'react-router-dom';
  - wrap `<Route /> in <Routes />`
  - In `<Route path = "/" element = "{<Home />}" />` path and element should be written.
  - In Product component, we need the particular component, that's why path = "/product/:productId" & other are same as well.

17. Build Navbar
  - In Navbar.jsx -> import `<NavLink>` from react-router-dom;
  - Set navlinks like home, about, contact, collection etc...
  ```
  <NavLink to='/about'>
                <p>About</p>
  </NavLink>
  ```
  - to = '/about' when we click on about, about pages will be open.
  - In inspect(dev mode), "active" className will be added, when we click on any navlink, this feature got by `<NavLink><NavLink />`
  - 

18. 
