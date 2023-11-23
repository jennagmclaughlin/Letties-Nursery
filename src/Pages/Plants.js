import React, { useState, useEffect, useContext } from "react";
// import products
import Product from "../Components/Product";
import { ProductContext } from "../Contexts/ProductContext";

const Plants = () => {
    const categories = ["House", "Aquatic"];
    const [products, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const filterData = async () => {
        const res = await fetch("https://sheetdb.io/api/v1/3bv3xp1nms8do");
        const data = await res.json();
        setProducts(data);
        setFilteredData(data);
    };

    useEffect(() => {
        if (selectedFilters.length > 0) {
            const filterData = products.filter((item) => {
                return selectedFilters.includes(item.category);
            });
            setFilteredData(filterData);
        } else {
            filterData();
        }
    }, [selectedFilters]);

    const handleClick = (e, category) => {
        const { checked } = e.target;
        if (checked) {
            setSelectedFilters((prev) => [...prev, category]);
        } else {
            setSelectedFilters(selectedFilters.filter((x) => x !== category));
        }
    };

    return (
        <section className="mb-12 flex-1">
            <div className="container mx-auto mt-5 p-5">
                <h2 className="buenard pb-4 text-4xl">Our Plants</h2>
                <div className="flex items-center gap-x-8 pb-4">
                    {categories.map((id, key) => {
                        return (
                            <div key={key}>
                                <input type="checkbox" value={id} name="filter" onClick={(e) => handleClick(e, id)} />
                                <label className="ml-2">{`${id}`} </label>
                            </div>
                        );
                    })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[1.5rem] max-w-sm md:max-w-none mx-auto">
                    {filteredData.map((item) => {
                        return <Product product={item} key={item.id} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Plants;
