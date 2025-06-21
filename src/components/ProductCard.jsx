import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/UsersAction";
import { toast } from "react-toastify";

const ProductCard = (props) => {
  const { id, title, image, category, price } = props.product;
  const user = useSelector((state) => state.userReducer.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CartHandler = (product) => {
    if (user) {
      const copyuser = { ...user, cart: [...user.cart] };
      const x = copyuser.cart.findIndex((c) => c.product?.id == product.id);

      if (x == -1) {
        copyuser.cart.push({ product, quantity: 1 });
      } else {
        copyuser.cart[x] = {
          product,
          quantity: copyuser.cart[x].quantity + 1,
        };
      }

      dispatch(asyncUpdateUser(copyuser.id, copyuser));
    } else {
      toast.error("Please Login first!");
      navigate("/login");
    }
  };

  return (
    <div className="shadow-lg border border-gray-300 rounded-lg h-[500px] w-[300px] p-3 flex flex-col gap-1 items-center justify-between">
      <div className="top aspect-[1/1] w-full overflow-hidden rounded-lg ">
        <img
          className="w-full h-full object-cover object-center rounded-lg hover:scale-95 duration-300"
          src={image}
          alt=""
        />
      </div>

      <div className="bottom h-[40%]   w-full flex flex-col overflow-hidden justify-between">
        <div className="textarea h-[70%] flex flex-col justify-between">
          <div className="txt">
            <h1 className="text-xl font-black">{title}</h1>
            <h4 className="px-2 py-1 bg-gray-100 text-orange-400 w-max">
              {category}
            </h4>
          </div>

          <h3 className="text-lg py-1">
            &#8377; <span>{price}</span>
          </h3>
        </div>

        <div className="buttons h-[30%] flex items-center justify-between gap-3">
          <button
            onClick={() => navigate(`/products/view-details/${id}`)}
            className="bg-black cursor-pointer hover:scale-95 duration-200 text-white px-3 py-2 rounded-sm w-full text-center"
          >
            View Details{" "}
          </button>

          {!user?.isAdmin && (
            <button
              onClick={() => CartHandler(props.product)}
              className="bg-black cursor-pointer hover:scale-95 duration-200 text-white px-3 py-2 rounded-sm w-full text-center"
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
