// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import Register from './Register';
import Header from './Header';
import Leftnav from './Leftnav';
import Login from './Login';
import Forget from './Forget';
import Home from './Components/Header/Home'
import Contact from './Components/Header/Contact'
import About from './Components/Header/About'
import Product from './Components/Header/Product'
import No_page from './Components/Header/No_page'
import ProductDetail from './Components/ProductDetail';
import Home_default from './Components/Header/Home_default';
import UserDetails from './Components/Header/UserDetails';
import Cart from './Components/Header/Cart';
import Footer from './Footer';
import MyOrder from './Components/Header/MyOrder';
import Checkout from './Components/Header/Checkout';
import OrderConfirm from './Components/Header/OrderConfirm';
import Reducer from './Components/Reducer';
import Merchant from './Components/Header/Merchant';
import Profile from './Components/Header/Profile';
import MerchantUpdate from './Components/Header/MerchantUpdate';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='forget' element={<Forget/>}/>
        <Route path='footer' element={<Footer/>}/>
        <Route path='product/Id/:id' element={<ProductDetail/>}/>
        <Route path='checkout/Id/:id' element={<Checkout/>}/>
        <Route path='checkout/Id/:id/order_confirmation' element={<OrderConfirm/>}/>
        <Route path='Home_main' element={<Home_default/>}/>
        <Route path='userDetail' element={<UserDetails/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='myorder' element={<MyOrder/>}/>
        <Route path="reducer" element={<Reducer/>}/>
        <Route path="merchant" element={<Merchant/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="MerchantUpdate/id/:_id" element={<MerchantUpdate/>}/>
        <Route path='*' element={<No_page/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
