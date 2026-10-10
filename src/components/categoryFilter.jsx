
import { useState } from "react";
import {sampleData} from "../data/product";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export default function CategoryFilter ({selectedCategory, setSelectedCategory}) {
    
    const Category = [
        "All", ...new Set(sampleData.map((data) => data.category))
    ]


    return (
       
        <>
       
        <div className="mx-8  pb-4 my-4 border-b-2 border-gray-400 hidden lg:block">
            <LocalOfferIcon className="text-orange-500  text-2xl mr-1 "/>
            {
                Category.map((Data) => (
                    <button 
                    onClick={() => setSelectedCategory(Data)}
                    key={Data} className=
                    {` px-[0.60rem] py-1 mx-2 rounded-full border-2 border-gray-500 transition delay-100
                        ${selectedCategory === Data ?
                        "border-2 border-orange-500 text-white bg-orange-400 " : " text-gray-300 hover:text-orange-500"}
                    `}>{Data}</button>
                ))
            }
        </div>
        </>
    )
};