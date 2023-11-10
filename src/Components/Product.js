import React, {useContext} from 'react';
import "../index.css";
import {Link} from "react-router-dom";
// import icons
import {BiPlus} from "react-icons/bi";
import {BsEye} from "react-icons/bs";

const Product = ({product}) => {
  const { id } = product;
  return (
    <div className="productCard bg-white w-full h-[355px] relative card-shadow rounded-md overflow-hidden" key={product.id}>
      <img src={product.image} alt={product.name} className="productCardImg w-full h-[355px] object-cover object-center relative z-[1] transition-opacity" />
      <div className="productCardAction w-full p-3 absolute top-0 z-[2] flex xl:translate-x-[60px] gap-3 flex-col items-end justify-start transition-transform">
        <button className="bg-purple hover:bg-purple-hover p-3 rounded text-white text-xl"><BiPlus /></button>
          <Link to={`/product/${id}`}>
            <button className="bg-gray-300 hover:bg-gray-400 p-3 rounded text-black text-xl"><BsEye /></button>
          </Link>
      </div>
      <div className="productCardInfo bg-white w-full h-[68px] relative z-[3] p-3 lg:flex flex-col justify-center translate-y-[-68px]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold text-lg">{product.name}</h2>
            <h6 className="text-xs italic">{product.scientificName}</h6>
          </div>
          <h2 className="text-xl">{product.price}</h2>
        </div>
      </div>
    </div>
  )
}

export default Product;