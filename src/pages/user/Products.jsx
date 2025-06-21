import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { Suspense, useEffect, useState } from "react";
import axios from "../../api/apiconfig";
import InfiniteScroll from "react-infinite-scroll-component";

const Products = () => {
  const { products } = useSelector((state) => state.productReducer);

  // const [products, setproducts] = useState([]);
  // const [hasMore, sethasMore] = useState(true);

  // const fetchdata = async () => {
  //   try {
  //     let { data } = await axios.get(
  //       `/products?_limit=5&_start=${products.length}`
  //     );
  //     if (data.length == 0) {
  //       sethasMore(false);
  //     } else {
  //       sethasMore(true);
  //       setproducts([...products, ...data]);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  const renderproducts = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <div className="flex min-h-[100vh] items-center flex-wrap justify-center  gap-3 mb-15">
      <div className="w-full relative h-[40vh] rounded-xl overflow-hidden mb-5">
        <img
          className="h-full w-full object-cover "
          src="/images/p-1.avif"
          alt=""
        />

        <div className="absolute top-5 md:top-10 left-5 md:w-[20%] w-[50%] ">
          <h2 className=" text-white text-3xl md:text-5xl font-black md:leading-13 ">
            Best Leather Bag Collection For You
          </h2>
          <p className="font-thin w-full md:text-lg text-gray-300 py-3 md:py-4">
            For those who prefer a hands-free stylish, and functional option.
          </p>
          <Link className=" transition-all duration-400 ease-in-out hover:bg-black hover:text-white text-sm px-3 py-1 w-max text-gray-300  rounded-3xl border border-gray-300 hover:border-black md:text-lg">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="w-full pb-5">
        <h1 className="md:text-6xl text-4xl font-black py-2">
          Our All Products
        </h1>
        <p className="font-thin w-[70%] md:w-[26%]  md:text-lg text-gray-600 py-3 md:py-4">
          These products can rotate weekly or based on seasonality and demand.
        </p>
        <div className="flex items-center gap-1 md:gap-4 w-full pt-2">
          <Link className=" transition-all duration-400 ease-in-out hover:bg-black hover:text-white text-sm px-3 py-1 w-max  rounded-3xl border border-black md:text-lg">
            Shoes
          </Link>
          <Link className=" transition-all duration-400 ease-in-out hover:bg-black hover:text-white text-sm px-3 py-1 w-max  rounded-3xl border border-black md:text-lg">
            Clothing
          </Link>
          <Link className=" transition-all duration-400 ease-in-out hover:bg-black hover:text-white text-sm px-3 py-1 w-max  rounded-3xl border border-black md:text-lg">
            Acessories
          </Link>
          <Link className=" transition-all duration-400 ease-in-out hover:bg-black hover:text-white text-sm px-3 py-1 w-max  rounded-3xl border border-black md:text-lg">
            Jewellery
          </Link>
        </div>
      </div>

      <Suspense fallback={<h2>Loading products...</h2>}>
        {products?.length > 0 ? (
          <InfiniteScroll
            className="flex items-center flex-wrap justify-center gap-3"
            dataLength={products.length}
            // next={fetchdata}
            // hasMore={hasMore}
            loader={<h4>Please wait...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b className="mt-5">You caught up all!</b>
              </p>
            }
          >
            {renderproducts}
          </InfiniteScroll>
        ) : (
          <h2 className="text-xl text-gray-500 py-5">No products available</h2>
        )}
      </Suspense>
    </div>
  );
};

export default Products;
