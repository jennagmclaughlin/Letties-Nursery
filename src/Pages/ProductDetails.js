import React, { useContext } from "react";
// import useParams
import { useParams } from "react-router-dom";
// import cart context
import { CartContext } from "../Contexts/CartContext";
// import product context
import { ProductContext } from "../Contexts/ProductContext";

const ProductDetails = () => {
    // get product id from url
    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);

    // get product based on id
    const product = products.find((item) => {
        return item.id === id;
    });

    // if product is not found
    if (!product) {
        return <section className="h-screen flex items-center justify-center">Loading...</section>;
    }

    // deconstruct product
    const { name, image, category, description, price } = product;

    return (
        <section className="flex-1">
            <div className="container p-4 mx-auto">
                <div className="flex flex-col lg:flex-row items-center mx-auto">
                    {/* Product image */}
                    <div className="flex-1 flex items-center justify-center">
                        <img src={image} alt={name} className="max-w-[200px] lg:max-w-sm rounded-xl mb-4 lg:mb-0" />
                    </div>
                    <div className="flex-1 flex flex-col text-center gap-y-2 lg:text-left">
                        <h1 className="buenard font-bold text-3xl">{name}</h1>
                        <div className="flex items-center justify-center lg:justify-start gap-x-8">
                            <h3 className="font-bold">${price}</h3>
                            <h3>{category}</h3>
                        </div>
                        <p>{description}</p>
                        <button
                            onClick={() => addToCart(product, product.id)}
                            className="bg-purple hover:bg-purple-hover w-[150px] rounded-xl py-2 px-4 mt-4 mx-auto lg:mx-0 text-white transition-bg duration-200"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
