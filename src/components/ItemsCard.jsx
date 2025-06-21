import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/UsersAction";

const ItemsCard = (props) => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  const product = props.product;

  const { image, title, price } = props.product.product;

  const IncreaseQuantityHandler = () => {
    const copyuser = { ...user, cart: [...user.cart] };
    const x = copyuser.cart.findIndex(
      (c) => c.product?.id == product.product.id
    );
    copyuser.cart[x] = {
      product: product.product,
      quantity: copyuser.cart[x].quantity + 1,
    };
    dispatch(asyncUpdateUser(copyuser.id, copyuser));
  };

  const DecreaseQuantityHandler = () => {
    const copyuser = { ...user, cart: [...user.cart] };
    const x = copyuser.cart.findIndex(
      (c) => c.product?.id == product.product.id
    );

    if (x !== -1) {
      if (copyuser.cart[x].quantity > 1) {
        copyuser.cart[x] = {
          product: product.product,
          quantity: copyuser.cart[x].quantity - 1,
        };
      } else {
        copyuser.cart.splice(x, 1);
      }

      dispatch(asyncUpdateUser(copyuser.id, copyuser));
    }
  };

  return (
    <div className="h-24 w-full  py-3 flex gap-2 items-center px-2 rounded bg-[#eae8e1]">
      <div className="h-20 w-20 rounded-lg">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col w-full h-full rounded-lg overflow-hidden  px-2 items-center justify-center gap-2 ">
        <div className="top w-full   flex items-center justify-between px-5">
          <span className="font-black">Name</span>
          <span className="font-black">Quantity</span>
        </div>
        <div className="bottom flex items-center justify-between w-full ">
          <div className="w-[40%] overflow-hidden relative">{title}</div>
          <div className="relative pr-4">
            <span className="absolute -top-11 md:-top-9 -left-3 w-max font-black">
              Total Price
            </span>
            <span> &#8377;</span>
            {price * product.quantity}
          </div>
          <div className="flex items-center justify-between gap-3">
            <span
              onClick={DecreaseQuantityHandler}
              className="px-3 py-1 bg-black text-white rounded hover:scale-95 duration-150 cursor-pointer"
            >
              -
            </span>
            <span>{product.quantity}</span>
            <span
              onClick={IncreaseQuantityHandler}
              className="px-3 py-1 bg-black text-white rounded hover:scale-95 duration-150 cursor-pointer"
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
