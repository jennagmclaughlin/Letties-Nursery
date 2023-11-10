import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// product provider
import ProductProvider from "./Context/ProductContext";
// sidebar provider
import SidebarProvider from "./Context/SidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <SidebarProvider>
        <ProductProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ProductProvider>
    </SidebarProvider>
);
