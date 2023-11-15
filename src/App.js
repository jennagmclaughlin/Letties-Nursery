import React from "react";
// import react router dom
import { Routes, Route, HashRouter } from "react-router-dom";
// import pages
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import About from "./Pages/About";
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
                <Route path="/about" element={<About />} />
            </Routes>
            <Sidebar />
            <Footer />
        </HashRouter>
    );
};

export default App;
