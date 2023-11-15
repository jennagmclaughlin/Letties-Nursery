import React, { useContext } from "react";
// import product context
import { ProductContext } from "../Context/ProductContext";
// import products
import Product from "../Components/Product";
// import navbar
import Navbar from "../Components/Navbar";

const Plants = () => {
    // get products from product context
    const { products } = useContext(ProductContext);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-5 p-5">
                <h2 className="buenard pb-4 text-4xl">Our Plants</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[1.5rem] max-w-sm md:max-w-none mx-auto">
                    {products.map((product) => {
                        return <Product product={product} key={product.id} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Plants;
