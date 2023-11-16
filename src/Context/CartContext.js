import React, { createContext, useState, useEffect } from "react";

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    // cart state
    const [cart, setCart] = useState([]);
    // item amount state
    const [itemAmount, setItemAmount] = useState(0);
    // total price state
    const [total, setTotal] = useState(0);

    // update total
    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount;
        }, 0);
        setTotal(total);
    });

    // update item amount
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);
            setItemAmount(amount);
        }
    });

    // add product to cart function
    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 };
        // check if item is already in cart
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        // if cart item is already in the cart
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    // add to the existing amount in the cart
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    // decrease amount
    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
        // remove item when amount reaches 0
        if (cartItem.amount < 2) {
            removeFromCart(id);
        }
    };

    // increase amount of item
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem, id);
    };

    // remove from cart
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    };

    // empty cart
    const emptyCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, itemAmount, addToCart, total, setTotal, removeFromCart, decreaseAmount, increaseAmount, emptyCart }}>{children}</CartContext.Provider>
    );
};

export default CartProvider;
