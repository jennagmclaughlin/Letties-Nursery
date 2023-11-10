import React from "react";
// import react router dom
import { Routes, Route, HashRouter } from "react-router-dom";
// import pages
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
// import components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";

const App = () => {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
            <Sidebar />
            <Footer />
        </HashRouter>
    );
};

export default App;
