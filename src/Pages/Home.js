import React, { useContext } from "react";
// import product context
import { ProductContext } from "../Context/ProductContext";
// import products
import Product from "../Components/Product";

const Home = () => {
    // get products from product context
    const { products } = useContext(ProductContext);

    //get only house plants
    const filteredProducts = products.filter((item) => {
        return item.category === "House";
    });
    return (
        <div>
            <section className="p-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[1.5rem] max-w-sm md:max-w-none mx-auto">
                        {filteredProducts.map((product) => {
                            return <Product product={product} key={product.id} />;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;