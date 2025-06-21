import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ItemsCard from "../../components/ItemsCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.userReducer.users);
  const { products } = useSelector((state) => state.productReducer);

  const renderCartItems = user.cart.map((c) => {
    return <ItemsCard key={c.product.id} product={c} />;
  });

  return (
    <div className="h-[100vh] w-full  flex flex-col items-center gap-4 mb-60">
      <div className="w-full">
        <h1 className="md:text-6xl text-4xl font-black py-2">Your Cart</h1>
        <p className="font-thin w-[70%] md:w-[24%]  md:text-lg text-gray-600 py-3 md:py-4">
          Fyndora’s picks for you, hand-packed with care. Let’s get you checked
          out smoothly.”
        </p>
      </div>

      {user.cart.length ? (
        <>{renderCartItems}</>
      ) : (
        <>
          {" "}
          <h1 className="text-xl md:text-2xl">Your cart is empty!</h1>
        </>
      )}
    </div>
  );
};

export default Cart;
