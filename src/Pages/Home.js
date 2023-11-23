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
// import icons
import { BiSolidCreditCard, BiSolidSmile, BiSolidTruck, BiSolidStar } from "react-icons/bi";

const Home = () => {
    // get products from product context
    const { products } = useContext(ProductContext);

    return (
        <div>
            <Header />
            {/* Browse our collection section */}
            <section className="relative z-1">
                <div className="container mx-auto mt-5 p-5">
                    <h2 className="buenard pb-4 text-4xl">Browse our collection</h2>
                    <div className="h-[400px] grid grid-cols-3 grid-rows-3 lg:grid-rows-4 gap-4">
                        {/* All plants */}
                        <Link to={`/plants`} className="browseAllPlants rounded-xl col-span-3 lg:col-span-1 lg:row-span-4">
                            <div className="bg-white/90 rounded-xl w-full h-full card-shadow flex lg:flex-col items-center justify-around lg:justify-center relative z-1">
                                <h2 className="text-2xl lg:mb-2">All Plants</h2>
                                <img src={CatPlant} className="h-[75%] lg:h-[60%]" />
                            </div>
                        </Link>
                        {/* House plants */}
                        <Link to={`/plants`} className="browseHousePlants rounded-xl col-span-3 row-start-2 lg:col-span-2 lg:row-span-2">
                            <div className="bg-white/90 rounded-xl w-full h-full card-shadow flex items-center justify-around">
                                <h2 className="text-2xl">House Plants</h2>
                                <img src={Dog} className="h-[75%]" />
                            </div>
                        </Link>
                        {/* Aquatic plants */}
                        <Link to={`/plants`} className="browseAquaticPlants rounded-xl col-span-3 row-start-3 lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-3">
                            <div className="bg-white/90 rounded-xl w-full h-full card-shadow flex items-center justify-around">
                                <h2 className="text-2xl">Aquatic Plants</h2>
                                <img src={Fish} className="h-[75%]" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Products section */}
            <section className="w-full relative after:bg-dark-green after:w-full after:h-[calc(100%+80px)] after:absolute after:top-[-80px] after:z-[-1]">
                <div className="container mx-auto mt-5 p-5">
                    {/* Our selection title */}
                    <h2 className="buenard pb-4 text-4xl text-white">Our Selection</h2>
                    {/* Filter products; only show first 10 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-[1rem] xl:gap-[1.5rem] max-w-sm md:max-w-none mx-auto">
                        {products
                            .filter((item, index) => index < 10)
                            .map((product) => {
                                return <Product product={product} key={product.id} />;
                            })}
                    </div>
                    <div className="w-full flex justify-center mt-10 mb-7">
                        {/* Browse all plants button */}
                        <Link to={`/plants`}>
                            <button className="bg-white hover:bg-gray-400 rounded-xl w-[200px] md:w-auto mx-auto py-2 px-6 transition duration-200 text-lg">Browse all</button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Site traits section */}
            <section className="mt-8">
                <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center lg:justify-between gap-y-4 lg:gap-y-0 text-center">
                    {/* Fast shipping */}
                    <div className="bg-white rounded-xl w-full lg:w-[300px] lg:aspect-square p-6 flex flex-col items-center justify-center gap-y-2 card-shadow">
                        <p className="text-6xl">
                            <BiSolidTruck />
                        </p>
                        <h3 className="text-2xl">Fast Shipping</h3>
                        <p className="text-sm text-gray-500">We ship to anywhere within the United States&#8212;and fast!</p>
                    </div>
                    {/* Quality products */}
                    <div className="bg-white rounded-xl w-full lg:w-[300px] lg:aspect-square p-6 flex flex-col items-center justify-center gap-y-2 card-shadow">
                        <p className="text-6xl">
                            <BiSolidSmile />
                        </p>
                        <h3 className="text-2xl">Quality Guaranteed</h3>
                        <p className="text-sm text-gray-500">All of our products are only of the highest quality.</p>
                    </div>
                    {/* Secure transactions */}
                    <div className="bg-white rounded-xl w-full lg:w-[300px] lg:aspect-square p-6 flex flex-col items-center justify-center gap-y-2 card-shadow">
                        <p className="text-6xl">
                            <BiSolidCreditCard />
                        </p>
                        <h3 className="text-2xl">Secure Transactions</h3>
                        <p className="text-sm text-gray-500">Your information's safe and secure.</p>
                    </div>
                </div>
            </section>
            {/* Site reviews section */}
            <section className="mt-8">
                <div className="container p-4 mx-auto">
                    <h2 className="buenard pb-4 text-4xl">Reviews</h2>
                    <div className="w-full pb-4 flex items-center justify-start gap-x-4 overflow-x-auto">
                        {/* Review */}
                        <div className="bg-white rounded-xl w-[350px] p-6 flex-shrink-0 flex flex-col justify-center gap-y-2 ml-[3px] card-shadow">
                            <h3 className="text-2xl">"Best plants ever!"</h3>
                            <div className="flex text-yellow-700">
                                <BiSolidStar />
                                <BiSolidStar />
                                <BiSolidStar />
                                <BiSolidStar />
                                <BiSolidStar />
                            </div>
                            <p>These are the best plants I ever got! My cat Billy-Bo-Beanie-Weanie loves them.</p>
                            <p className="text-xs text-gray-500">&#8212; Jane Miller</p>
                        </div>
                        {/* Review */}
                        <div className="bg-white rounded-xl w-[350px] p-6 flex-shrink-0 flex flex-col justify-center gap-y-2 ml-[3px] card-shadow">
                            <h3 className="text-2xl">"Best plants ever!"</h3>
                            <div className="flex text-yellow-700">
                                <BiSolidStar />
                                <BiSolidStar />
                                <BiSolidStar />
                                <BiSolidStar />
                                <BiSolidStar />
                            </div>
                            <p>These are the best plants I ever got! My cat Billy-Bo-Beanie-Weanie loves them.</p>
                            <p className="text-xs text-gray-500">&#8212; Jane Miller</p>
                        </div>
                        {/* Review */}
                        <div className="bg-white rounded-xl w-[350px] p-6 flex-shrink-0 flex flex-col justify-center gap-y-2 ml-[3px] card-shadow">
                            <h3 className="text-2xl">"Best plants ever!"</h3>
                            <div className="flex text-yellow-700">
                                <BiSolidStar />
                                <BiSolidStar />
                                <BiSolidStar />
                                <BiSolidStar />
                                <BiSolidStar />
                            </div>
                            <p>These are the best plants I ever got! My cat Billy-Bo-Beanie-Weanie loves them.</p>
                            <p className="text-xs text-gray-500">&#8212; Jane Miller</p>
                        </div>
                        {/* Review */}
                        <div className="bg-white rounded-xl w-[350px] p-6 flex-shrink-0 flex flex-col justify-center gap-y-2 ml-[3px] card-shadow">
                            <h3 className="text-2xl">"Best plants ever!"</h3>
                            <div className="flex text-yellow-700">
                                <BiSolidStar />
                                <BiSolidStar />
                                <BiSolidStar />
                                <BiSolidStar />
                                <BiSolidStar />
                            </div>
                            <p>These are the best plants I ever got! My cat Billy-Bo-Beanie-Weanie loves them.</p>
                            <p className="text-xs text-gray-500">&#8212; Jane Miller</p>
                        </div>
                        {/* Review */}
                        <div className="bg-white rounded-xl w-[350px] p-6 mr-2 flex-shrink-0 flex flex-col justify-center gap-y-2 ml-[3px] card-shadow">
                            <h3 className="text-2xl">"I worship my plants."</h3>
                            <div className="flex text-yellow-700">
                                <BiSolidStar />
                                <BiSolidStar />
                                <BiSolidStar />
                                <BiSolidStar />
                                <BiSolidStar />
                            </div>
                            <p>What is the meaning of life if not for plants?</p>
                            <p className="text-xs text-gray-500">&#8212; James Adams</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Email call to action section */}
            <section className="bg-gray-400 mt-8">
                <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-center lg:justify-between">
                    {/* Never miss a deal & caption */}
                    <div className="text-center lg:text-left">
                        <h2 className="buenard text-3xl">Never miss a deal.</h2>
                        <p className="text-sm">Get amazing deals for free. No spam, no hassle. Unsubscribe at any time.</p>
                    </div>
                    {/* Email form */}
                    <form className="flex flex-col lg:flex-row items-center justify-center gap-y-4 lg:gap-x-4 lg:gap-y-0">
                        {/* Email */}
                        <input type="email" name="email" placeholder="Enter email" className="rounded-xl w-[300px] lg:w-[400px] p-2" required />
                        {/* Submit */}
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
