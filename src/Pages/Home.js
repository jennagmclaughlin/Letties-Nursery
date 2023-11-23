import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import components
import Header from "../Components/Header";
// import products
import Product from "../Components/Product";
// import product context
import { ProductContext } from "../Contexts/ProductContext";
// import images
import CatPlant from "../Components/Assets/img/catPlant.webp";
import Dog from "../Components/Assets/img/dog.webp";
import Fish from "../Components/Assets/img/fish.webp";

const Home = () => {
    // get products from product context
    const { products } = useContext(ProductContext);

    return (
        <div>
            <Header />
            <section className="relative z-1">
                <div className="container mx-auto mt-5 p-5">
                    <h2 className="buenard pb-4 text-4xl">Browse our collection</h2>
                    <div className="h-[400px] grid grid-cols-3 grid-rows-3 lg:grid-rows-4 gap-4">
                        <Link to={`/plants`} className="browseAllPlants rounded-xl col-span-3 lg:col-span-1 lg:row-span-4">
                            <div className="bg-white/90 rounded-xl w-full h-full card-shadow flex lg:flex-col items-center justify-around lg:justify-center relative z-1">
                                <h2 className="text-2xl lg:mb-2">All Plants</h2>
                                <img src={CatPlant} className="h-[75%] lg:h-[60%]" />
                            </div>
                        </Link>
                        <Link to={`/plants`} className="browseHousePlants rounded-xl col-span-3 row-start-2 lg:col-span-2 lg:row-span-2">
                            <div className="bg-white/90 rounded-xl w-full h-full card-shadow flex items-center justify-around">
                                <h2 className="text-2xl">House Plants</h2>
                                <img src={Dog} className="h-[75%]" />
                            </div>
                        </Link>
                        <Link to={`/plants`} className="browseAquaticPlants rounded-xl col-span-3 row-start-3 lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-3">
                            <div className="bg-white/90 rounded-xl w-full h-full card-shadow flex items-center justify-around">
                                <h2 className="text-2xl">Aquatic Plants</h2>
                                <img src={Fish} className="h-[75%]" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="w-full relative after:bg-dark-green after:w-full after:h-[calc(100%+80px)] after:absolute after:top-[-80px] after:z-[-1]">
                <div className="container mx-auto mt-5 p-5">
                    <h2 className="buenard pb-4 text-4xl text-white">Our Selection</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-[1rem] xl:gap-[1.5rem] max-w-sm md:max-w-none mx-auto">
                        {products
                            .filter((item, index) => index < 10)
                            .map((product) => {
                                return <Product product={product} key={product.id} />;
                            })}
                    </div>
                    <div className="w-full flex justify-center mt-10 mb-7">
                        <Link to={`/plants`}>
                            <button className="bg-white hover:bg-gray-400 rounded-xl w-[200px] md:w-auto mx-auto py-2 px-6 transition duration-200 text-lg">Browse all</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="bg-gray-400 mt-8">
                <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-center lg:justify-around">
                    <div>
                        <h2 className="buenard text-3xl font-bold">Never miss a deal.</h2>
                        <p className="text-sm">Get amazing deals for free. No spam, no hassle. Unsubscribe at any time.</p>
                    </div>
                    <form className="flex flex-col lg:flex-row items-center justify-center gap-y-4 lg:gap-x-4 lg:gap-y-0">
                        <input type="email" name="email" placeholder="Enter email" className="rounded-xl w-[300px] lg:w-[400px] p-2" required />
                        <input
                            type="submit"
                            value="Subscribe"
                            className="bg-purple hover:bg-purple-hover rounded-xl w-[150px] px-4 py-2 text-white transition-bg duration-200 cursor-pointer"
                        />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
