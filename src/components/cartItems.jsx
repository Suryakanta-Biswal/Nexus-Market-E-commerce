import { useCart } from "../context/CartContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

export default function CartItems ({item}) {
    const { addToCart, removeFromCart, cartCount } = useCart();

    const increseCart = () => addToCart(item)
    const decreseCart = () => removeFromCart(item.id)
    return (
        
        <div className="h-[120px] sm:h-[100px] w-[80%] bg-[#131f37] shadow-lg my-4 px-3 rounded-2xl text-white 
        py-2 mx-auto box-content">
            
            <div className=" flex justify-between p-2  items-center">
                <div className="sm:flex items-center h-[50px] sm:h-[70px]">
                    <img src={item.image} alt={item.name} className="h-full w-[80px] sm:w-[100px] rounded-xl"/>
                    <div className=" sm:pl-3">
                          <p className=" text-sm sm:text-lg font-semibold text-gray-300">{item.name}</p>
                          <p className="text-yellow-500 text-lg  ">{item.price}</p>
                    </div>
                </div>
                <div className="flex w-[160px]  justify-evenly items-center  ">             
                <div className=" gap-1  font-bold cursor-pointer 
                border-2 border-gray-400 rounded-full w-[5.1rem] ">
                    <span
                     onClick={decreseCart}
                     className="p-[3px] "><RemoveIcon/>
                     </span>
                    <span className="p-1 ">{cartCount}</span>
                    <span
                     onClick={increseCart}
                     className="p-[3px] "><AddIcon/>
                     </span>
                </div>
                <button 
                onClick={() => removeFromCart(item.id, true)}
                className=" px-2 py-1 mt-1 rounded-full bg-red-500"><CloseIcon/>
                </button>
                </div>   
            </div>
        </div>
        
    )
};