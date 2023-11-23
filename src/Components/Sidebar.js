import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icons
import { IoMdArrowRoundForward } from "react-icons/io";
import { BiTrash } from "react-icons/bi";
// import components
import CartItem from "./CartItem";
// import sidebar context
import { SidebarContext } from "../Contexts/SidebarContext";
// import cart context
import { CartContext } from "../Contexts/CartContext";

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, itemAmount, emptyCart, total } = useContext(CartContext);

    return (
        <div className={`${isOpen ? "right-0" : "-right-full"} bg-white w-full lg:w-[35vw] xl:max-w-[30vw] h-full fixed top-0 z-[99] shadow-2xl transition-all duration-200`}>
            <div className="h-[10%] border-b border-gray-300 p-4 flex items-center justify-between">
                {/* sidebar header + counter */}
                <h2 className="buenard text-lg font-bold">My Cart ({itemAmount})</h2>
                {/* close sidebar */}
                <button onClick={handleClose} aria-label="Close cart">
                    <IoMdArrowRoundForward className="text-xl" />
                </button>
            </div>
            <div className="border-b border-gray-300 h-[68%] p-4 pt-0 overflow-y-auto overflow-x-hidden">
                {cart.map((item) => {
                    return <CartItem item={item} key={item.id} />;
                })}
            </div>
            <div className="w-full h-[20%] pt-4 px-4 flex flex-col items-center justify-center gap-y-2">
                {/* total */}
                <div className="w-full flex justify-between">
                    <span>Total</span>
                    <span>${parseFloat(total).toFixed(2)}</span>
                </div>
                <div className="w-full flex justify-between">
                    <span>Tax</span>
                    <span className="text-black">${parseFloat(total * 0.072).toFixed(2)}</span>
                </div>
                <div className="w-full flex justify-between text-2xl">
                    <span>Subtotal</span>
                    <span className="font-bold">${parseFloat(total * 0.072 + total).toFixed(2)}</span>
                </div>
                <div className="w-full mt-4 flex gap-x-4 items-center justify-center">
                    <button className="bg-dark-green hover:bg-black rounded-xl py-2 px-6 text-xl text-white transition duration-200">Checkout</button>
                    {/* clear cart */}
                    <button onClick={emptyCart} aria-label="Empty cart" className="text-gray-500 hover:text-red-500 transition duration-200">
                        Empty cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
