import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// product provider
import ProductProvider from "./Contexts/ProductContext";
// sidebar provider
import SidebarProvider from "./Contexts/SidebarContext";
// cart provider
import CartProvider from "./Contexts/CartContext";

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
