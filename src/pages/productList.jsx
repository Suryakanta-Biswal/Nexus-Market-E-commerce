import SearchFilter from "../components/searchFilter";
import CatagoryFilter from "../components/categoryFilter"
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";
import { useState } from "react";



export default function ProductList () {
    const {products} = useCart();
    const [searchItem, setSearchItem] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filterProduct = products.filter((product) => {
        const searchFilter = product.name.toLowerCase().includes(searchItem.toLowerCase())
        || product.about.toLowerCase().includes(searchItem.toLowerCase());

        const filterCategory = selectedCategory === "All" 
        || product.category === selectedCategory;

        return searchFilter && filterCategory;
    })
    
    return (
        <>
        <div className="">
            
           <SearchFilter searchItem={searchItem} setSearchItem={setSearchItem}/>
           <CatagoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

            <h2 className=" p-3 mx-3 text-xl font-bold text-white sm:text-4xl">Trending Products</h2>
            <section id="ProductBox">
                <div className="grid grid-cols-1 sm:grid-cols-2 pb-4
                lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
                    {
                        filterProduct.map((product, index) => (
                             <ProductCard key={index} product={product}/>
                        ))
                    }

                </div>

            </section>
        </div>
        
        </>
    )
};