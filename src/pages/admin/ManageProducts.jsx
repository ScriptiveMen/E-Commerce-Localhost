import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

const ManageProducts = () => {
  const { products } = useSelector((state) => state.productReducer);

  const renderproducts = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return products?.length > 0 ? (
    <div className="bg-red-300 flex items-center flex-wrap justify-center gap-3 md:justify-start mb-20">
      <div className="w-full pb-5">
        <h1 className="md:text-6xl text-4xl font-black py-2">
          Manage Products
        </h1>
        <p className="font-thin w-[70%] md:w-[26%]  md:text-lg text-gray-600 py-3 md:py-4">
          Add, update, or remove products. Monitor inventory and keep your
          catalog fresh and up-to-date.
        </p>
      </div>
      {renderproducts}
    </div>
  ) : (
    <h1>No products available</h1>
  );
};

export default ManageProducts;
