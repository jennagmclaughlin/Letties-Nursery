import React from "react";
// import react router dom
import { Routes, Route, HashRouter } from "react-router-dom";
// import pages
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import About from "./Pages/About";
import Plants from "./Pages/Plants";
// import components
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
// import ScrollToTop
import ScrollToTop from "./ScrollToTop";

const App = () => {
    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/plants" element={<Plants />} />
            </Routes>
            <Sidebar />
            <Footer />
        </HashRouter>
    );
};

export default App;
