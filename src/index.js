import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// product provider
import ProductProvider from "./Context/ProductContext";
// sidebar provider
import SidebarProvider from "./Context/SidebarContext";
// cart provider
import CartProvider from "./Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <SidebarProvider>
        <CartProvider>
            <ProductProvider>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </ProductProvider>
        </CartProvider>
    </SidebarProvider>
);
