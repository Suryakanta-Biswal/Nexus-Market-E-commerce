import { useCart } from "../context/CartContext";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {Link} from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CartItems from "../components/cartItems";
import GppGoodIcon from '@mui/icons-material/GppGood';

export default function cart () {
    const { cart, cartTotalPrice, cartCount } = useCart();
    console.log("cart=", cart)
    console.log("price=", cartTotalPrice);
    return (
        <section id="cart">
            
            <div className="w-screen pb-4">
                <div className=" w-[80%] mx-auto my-3">
                    <Link to={"/"}>
                         <p className="font-semibold text-yellow-500 bg-transparent "><ArrowBackIcon/>Back to Home</p>
                    </Link>
                    <h2 className=" text-xl sm:text-4xl text-white font-bold ">Shopping Cart({cartCount})</h2>
                </div>
                <div className="h-[80%] w-full">                   
                    {cart.map((item) => <CartItems key={item.id} item={item}/>)}
                </div>
                <div className=" h-[360px] w-[80%] bg-[#131f37] shadow-lg rounded-xl p-4 mx-auto box-content">
                    <div className=" h-[300px] w-full  px-10 ">
                    <h3 className="p-2 text-lg sm:text-2xl font-bold text-white"><CurrencyRupeeIcon className="  text-yellow-500 text-left "/>Order Total</h3>
                    <div className="p-2 border-t-2 border-gray-400 text-lg font-semibold flex justify-between">
                        <span className=" text-gray-300 py-2">SubTotal:</span>
                        <span className=" text-yellow-500 py-2"><CurrencyRupeeIcon/>{Math.floor(cartTotalPrice)}.00</span>
                    </div>
                    <div className="p-2 border-b-2 border-gray-400 text-lg font-semibold flex justify-between">
                        <span className=" text-gray-300 py-2">Shipping (Express)</span>
                        <span className=" text-green-600 py-2">Free</span>
                    </div>
                    <div className="p-2 font-semibold flex justify-between">
                        <span className="text-lg sm:text-xl text-white  font-bold">Estimated Total:</span>
                        <span className=" text-yellow-500 text-lg"><CurrencyRupeeIcon/>{Math.floor(cartTotalPrice)}.00</span>
                    </div>
                    <div>
                        
                    </div>
                    <div className=" text-center w-full]">
                        <Link to={"/"}>
                        <button className=" font-bold p-2 mt-10 border-2 border-blue-900
                         hover:bg-orange-400 hover:border-orange-500 text-white transition
                          duration-200 px-4 rounded-md w-full flex items-center justify-center pl-2
                          text-sm sm:text-xl"><GppGoodIcon className="text-green-600"/>PROCEED SECURELY</button>
                        </Link>
                        
                    </div>

                 </div>
                </div>
            </div>
        </section>
    )
};