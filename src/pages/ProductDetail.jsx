import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncDeleteProduct } from "../store/actions/ProductsAction";

const ProductDetail = () => {
  const { products } = useSelector((state) => state.productReducer);
  const user = useSelector((state) => state.userReducer.users);
  const params = useParams();
  const navigate = useNavigate();
  const singleproduct = products?.find((p) => p.id == params.id);
  const dispatch = useDispatch();

  const LoginHandler = () => {
    {
      user ? console.log("Buyed!") : navigate("/login");
    }
  };

  const DeleteHandler = () => {
    dispatch(asyncDeleteProduct(singleproduct.id));
    navigate("/admin/manage-products");
  };

  return singleproduct ? (
    <div className="w-full h-[100vh] flex flex-col md:flex-row gap-3 mb-20">
      <div className=" w-full h-[45%] md:h-[80%] rounded-lg overflow-hidden md:w-1/2 top">
        <img
          className="aspect-[1/1] w-full object-cover object-center rounded-lg"
          src={singleproduct.image}
          alt="product"
        />
      </div>

      <div className="bottom w-full h-[55%] md:h-full px-2">
        <h1 className="relative text-center text-4xl font-black">
          {singleproduct.title}
        </h1>

        <div className="w-full h-full  flex flex-col justify-between">
          <div className="info">
            <h2 className="pt-10 font-bold text-xl md:text-2xl">
              Product Description
            </h2>
            <p className="md:text-xl md:pt-2">{singleproduct.description}</p>

            <h2 className="font-bold text-xl pt-5 ">Ratings: </h2>
            <p className="text-2xl md:text-3xl text-gray-400 w-full text-center">
              <span className="text-4xl text-black md:text-5xl">4.5</span>/5
            </p>

            <div className="w-full pt-5 flex items-center gap-3">
              <h2 className="font-bold text-xl">Price: </h2>
              <p className="text-xl">
                {" "}
                <span>&#8377;</span> {singleproduct.price}
              </p>
            </div>
          </div>

          <div className="btn w-full flex  items-center justify-end gap-3 mb-10">
            {user?.isAdmin ? (
              <>
                <button
                  onClick={() =>
                    navigate(`/admin/update-product/${singleproduct.id}`)
                  }
                  className="bg-black text-white text-xl w-[30%] rounded py-2 hover:scale-95 duration-200 cursor-pointer"
                >
                  Update
                </button>
                <button
                  onClick={DeleteHandler}
                  className="bg-red-700 text-white text-xl w-[30%] rounded py-2 hover:scale-95 duration-200 cursor-pointer"
                >
                  Delete
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={LoginHandler}
                  className="bg-black text-white text-xl cursor-pointer hover:scale-95 duration-200 w-[40%] md:w-[30%] rounded py-2 "
                >
                  Buy Now
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Product details not found</h1>
  );
};

export default ProductDetail;
