import {Link} from "react-router-dom"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalMallIcon from '@mui/icons-material/LocalMall';
// import ProductDetails from "./productDetails";

import { useCart } from "../context/CartContext";

export default function ProductCard ({product}) {
    const {addToCart} = useCart();
    return (
        <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden mx-4 text-white
        flex flex-col h-full transition duration-500 transform border border-gray-800
        hover:scale-[1.03] hover:shadow-orange-800/40 ">
            <Link to={`/product/${product.id}`} className="relative cursor-pointer overflow-hidden">

            <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
            <div className=" flex justify-between items-center">
                 <p className="p-2 font-semibold text-gray-400">{product.name}</p>
                 <p className="p-2 text-[0.75rem]">{product.category}</p>
            </div>
            <p className="p-2 text-[0.75rem]  font-semibold">{product.about}</p>
            <p className="p-2 text-yellow-600"><CurrencyRupeeIcon/>{product.price}</p>
           
            </Link>
             <button className="w-[89%] m-3 px-4 py-2 border-2 border-blue-900 rounded-xl flex items-center justify-center
            hover:bg-blue-700 hover:text-white transition duration-200" onClick={()=>addToCart(product)}>
                <LocalMallIcon className="p-[0.10rem]"/>
                Add to Cart
            </button>
        </div>
    )
};