
import './App.css'
import Navbar from "../src/components/navbar";
import ProductList from "../src/pages/productList";
import Cart from "../src/pages/cart";
import ProductDetails from "../src/pages/productDetails";
import Footer from "../src/components/footer";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <div className=" min-h-screen bg-gray-900   font-sans">
        <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      
      </div>
      <Footer/>
    </Router>
    </>
  )
}

export default App
