import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icons
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
// import cart context
import { CartContext } from "../Contexts/CartContext";

const CartItem = ({ item }) => {
    const { removeFromCart, decreaseAmount, increaseAmount } = useContext(CartContext);

    // deconstruct item
    const { id, name, image, price, amount } = item;

    return (
        <div className="bg-white w-full h-[130px] border-b border-gray-300 p-4 lg:px-5 flex items-center">
            <div className="w-full flex gap-x-4">
                {/* item image */}
                <Link to={`/product/${id}`}>
                    <img src={image} alt={name} className="max-w-[80px] rounded-xl" />
                </Link>
                <div className="w-full flex flex-col justify-center">
                    <div className="flex justify-between items-center">
                        {/* title */}
                        <Link to={`/product/${id}`} className="max-w-[240px]">
                            <h2 className="text-lg font-bold">{name}</h2>
                        </Link>
                        {/* remove item from cart */}
                        <button onClick={() => removeFromCart(id)}>
                            <IoMdClose className="text-xl text-gray-500 hover:text-red-500 transition duration-200 cursor-pointer" />
                        </button>
                    </div>
                    <div className="h-[36px] flex items-center gap-x-2 text-sm">
                        {/* quantity of items */}
                        <div className="border border-gray-300 max-w-[100px] h-full flex gap-x-2 flex-1 items-center">
                            {/* minus button */}
                            <button
                                onClick={() => decreaseAmount(id)}
                                aria-label="Decrease item amount by one"
                                className="hover:bg-gray-300 h-full flex-1 flex items-center justify-center transition duration-200"
                            >
                                <IoMdRemove />
                            </button>
                            {/* amount */}
                            <div className="h-full flex items-center justify-center">{amount}</div>
                            {/* plus button */}
                            <button
                                onClick={() => increaseAmount(id)}
                                aria-label="Increase item amount by one"
                                className="hover:bg-gray-300 h-full flex-1 flex items-center justify-center transition duration-200"
                            >
                                <IoMdAdd />
                            </button>
                        </div>
                        {/* item price */}
                        <div className="ml-2 flex-1 flex items-center text-gray-500">${price}</div>
                        {/* final price (quantity x price) */}
                        <div className="flex-1 flex items-center justify-end text-lg">
                            {/* make final amount 2 decimals */}
                            {`$${parseFloat(price * amount).toFixed(2)}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
