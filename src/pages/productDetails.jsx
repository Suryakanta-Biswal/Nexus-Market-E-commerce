import { useState, useEffect } from "react";
import { sampleData } from "../data/product"
import { useParams } from "react-router-dom"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { useCart } from "../context/CartContext";

export default function ProductDetails () {
    const {id} = useParams();
    const [findProduct, setFindProduct] = useState()
   

    useEffect(() => {   
       setFindProduct(sampleData.find(Product => Product.id == id))
    },[id]);

    const {addToCart} = useCart();

    return (
        <>
        <section id="productDtl" className="w-[90%]  m-auto  ">
            {
                findProduct?
                <>
                <Link to={'/'}>
                 <p className="text-yellow-600 px-6 sm:px-11 pt-4 font-semibold "><ArrowBackIcon/>Back to Home</p>
                </Link>
                
                
                        <div className="mx-auto  sm:h-[500px] w-full md:w-[80%] p-6 rounded-2xl ">
                            <div className="w-full h-full">
                            <img src={findProduct.image} alt="" className=" w-full h-full rounded-xl transition ease-in-out delay-150 hover:scale-[1.01] duration-300 cursor-pointer"/>
                            </div>
                        </div>
                        <div className=" mt-4 mx-auto sm:w-[70%]">
                            <div className="">
                            <p className="text-[0.80rem] text-gray-400 p-2 pt-0">{findProduct.category}</p>
                            <h1 className=" text-2xl sm:text-[2rem] font-bold text-white p-2">{findProduct.name}</h1>                           
                            <p className="text-lg text-yellow-500 py-3"><CurrencyRupeeIcon />{findProduct.price}</p>
                            <p className=" text-lg font-semibold text-white border-b border-gray-300 pb-4">
                                <InfoIcon className=" text-yellow-600"/>
                                <span className="pl-2">Product Overview</span>
                            </p>
                            <p className="text-md  text-gray-300 p-2">{findProduct.about}</p>
                            <ul className=" my-3 bg-slate-800 rounded-xl p-2 border-2 border-gray-900 shadow-lg w-full ">
                                <li className="p-2 flex ">
                                    <ElectricBoltIcon className="text-yellow-600 h-full"/>
                                    <div>
                                        <span className="text-gray-300 ml-2">High-Quality, Professional Grade Materials.</span>
                                    </div>
                                    
                                </li>
                                <li className="p-2 flex">
                                    <ElectricBoltIcon className="text-yellow-600"/>
                                    <div>
                                        <span className="text-gray-300 pl-2">Comprehensive 1-year Manufacturer Warranty.</span>
                                    </div>
                                </li>
                                <li className="p-2 flex">
                                    <ElectricBoltIcon className="text-yellow-600"/>
                                    <div>
                                        <span className="text-gray-300 pl-2">Immidiate Shipping for In-Stock Items.</span>
                                    </div>
                                </li>
                            </ul>
                             <div className="flex gap-4 p-2">
                                <button onClick={()=>addToCart(findProduct)} className=" btn btn-primary">Add to Cart</button>
                                <button className=" btn btn-warning">Buy Now</button>
                            </div>
                            </div>
                           
                       
                    
                        
                    
                    
                    
                </div></>:
                <p>Data Not Found...</p>
            }
        </section>
        </>
    )
};