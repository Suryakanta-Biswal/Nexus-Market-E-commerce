import { useContext, createContext, useState, useEffect, useMemo } from "react";
import {sampleData} from "../data/product"
const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);


    //Add items in the cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem  = prevCart.find((item) => item.id === product.id);
            if(existingItem) {
                return prevCart.map((item) => item.id === product.id
            ?{...item, quantity: item.quantity + 1}
            : item
            );
        }else {
            return [...prevCart, {...product, quantity: 1}]
        }
        });
    };

    // Remove item from cart
    const removeFromCart = (productId, removeAll = false) => {
        setCart((prevCart) => {
            const existingItem  = prevCart.find((item) => item.id === productId);
            if(!existingItem) return prevCart;
            if(removeAll || existingItem.quantity === 1) {
                return prevCart.filter(item => item.id !== productId)
        }else {
            return prevCart.map(item => item.id === productId ?
                {...item, quantity: item.quantity - 1}:item
            );
        }
        });
    };

    const clearCart = () => setCart([]);

    const cartCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0),[cart])

    const cartTotalPrice = useMemo(() => cart.reduce((total, item) => total + item.price*item.quantity, 0), [cart])

    useEffect(() => {
        setProducts(sampleData)
    }, []);
    
    return(
        <>
        <CartContext.Provider value={{ products, cart, addToCart, clearCart, removeFromCart, cartTotalPrice, cartCount }}>{children}</CartContext.Provider>
        </>
    )
}

export const useCart = () => useContext(CartContext);