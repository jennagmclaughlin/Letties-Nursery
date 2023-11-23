import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../index.css";
import { Link } from "react-router-dom";
// import icons
import { BiPlus } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
// import cart context
import { CartContext } from "../Contexts/CartContext";

const Product = ({ product }) => {
    // add product to cart
    const { addToCart } = useContext(CartContext);
    // deconstruct product
    const { id, name, scientificName, category, image, superCompressed, price } = product;

    return (
        <div className="productCard bg-white w-full h-[360px] relative rounded-md overflow-hidden card-shadow" key={product.id}>
            {/* product image; lazy load to boost seo + lower load times */}
            <LazyLoadImage
                placeholderSrc={superCompressed}
                src={image}
                alt={name}
                className="productCardImg w-full h-[355px] object-cover object-center relative z-[1] transition-opacity"
            />
            <div className="productCardAction w-full h-[350px] p-3 absolute top-0 z-[2] flex xl:translate-x-[60px] gap-3 flex-col items-end justify-start transition-transform">
                {/* add to cart button */}
                <button onClick={() => addToCart(product, id)} aria-label="Add to cart" className="bg-purple hover:bg-purple-hover p-3 rounded text-white text-xl">
                    <BiPlus />
                </button>
                {/* view product page button */}
                <Link to={`/product/${id}`}>
                    <button aria-label="View product details" className="bg-gray-300 hover:bg-gray-400 p-3 rounded text-black text-xl">
                        <BsEye />
                    </button>
                </Link>
            </div>
            <div className="productCardInfo bg-white w-full h-[70px] relative z-[3] p-3 lg:flex flex-col justify-center translate-y-[-70px]">
                <div className="flex justify-between items-center">
                    <div>
                        {/* product name */}
                        <h2 className="font-bold text-lg lg:leading-5">{name}</h2>
                        {/* product capton (scientific name and category) */}
                        <h6 className="text-xs">
                            <span className="italic">{scientificName}</span>; {category} plant
                        </h6>
                    </div>
                    {/* product price */}
                    <h2 className="text-xl">${price}</h2>
                </div>
            </div>
        </div>
    );
};

export default Product;
