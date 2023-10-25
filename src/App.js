// import './App.css';
import React from 'react';
// import ImagesComponent from './lesson 4/ImagesComponent';
// import Image1 from './lesson 4/Image1';
// import Image2 from './lesson 4/Image2';
// import Image3 from './lesson 4/Image3';
// import store from './redux/store';
import AppHeader from './project/components/AppHeader';
import { Provider } from 'react-redux';
import Footer from './project/components/Footer';
import HomePage from './project/components/HomePage';
import projectStore from './project/reduxProject/projectStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShoppingCartPage from './project/components/ShoppingCartPage';
import Pastries from './project/components/Pastries';
import ShowPastry from './project/components/ShowPastry';
import WishlistPage from './project/components/WishlistPage';
import About from './project/components/About';
import Payment from './project/components/Payment';
//styles
import "../src/project/styles/aboutStyle.css";
import "../src/project/styles/advertisement.css";
import "../src/project/styles/appStyle.css";
import "../src/project/styles/bookStyle.css";
import "../src/project/styles/cartStyle.css";
import "../src/project/styles/footerStyle.css";
import "../src/project/styles/headerStyle.css";
import "../src/project/styles/homeStyle.css";
import "../src/project/styles/pastriesStyle.css";
import "../src/project/styles/paymentStyle.css";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <ImagesComponent>
        <Image1></Image1>
        <Image2></Image2>
        <Image3></Image3>
      </ImagesComponent> */}
      {/* <Provider store={store}>
          {/* <Details></Details> */}
      {/* <ShowProduct></ShowProduct>
        </Provider> */}
      {/* <Payment></Payment> */}
      <Provider store={projectStore}>
        <BrowserRouter>
          <AppHeader></AppHeader>
          <body>
            <Routes>
              <Route exact path='/home' element={<HomePage />} />
              <Route exact path='/pastries/:category/:subCategory' element={<Pastries />} />
              <Route exact path='/shoppingCart' element={<ShoppingCartPage />} />
              <Route exact path='/wishlist' element={<WishlistPage />} />
              <Route exact path='/showPastry/:id' element={<ShowPastry />} />
              <Route exact path='/payment/:total/:discount' element={<Payment />} />
              <Route exact path='/about' element={<About />} />

            </Routes>
          </body>
          <Footer></Footer>
        </BrowserRouter>

      </Provider>

      {/* </header> */}
    </div>

  );
}

export default App;
