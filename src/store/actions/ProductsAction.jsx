import { toast } from "react-toastify";
import { loadproducts } from "../reducers/ProductSlice";

export const asyncLoadProducts = () => async (dispatch, getState) => {
  try {
    let products = JSON.parse(localStorage.getItem("productdb"));
    dispatch(loadproducts(products));
  } catch (error) {
    console.log(error);
  }
};

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    let copy = JSON.parse(localStorage.getItem("productdb"));
    copy.push(product);
    localStorage.setItem("productdb", JSON.stringify(copy));
    dispatch(asyncLoadProducts());
    toast.success("Product created");
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const asyncUpdateProduct =
  (id, product) => async (dispatch, getState) => {
    try {
      let copy = JSON.parse(localStorage.getItem("productdb"));

      const index = copy.findIndex((p) => p.id == id);

      if (index !== -1) {
        copy[index] = { ...copy[index], ...product };
        localStorage.setItem("productdb", JSON.stringify(copy));
      }

      dispatch(asyncLoadProducts());
      toast.success("Product updated");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
  try {
    let products = JSON.parse(localStorage.getItem("productdb"));
    const index = products.findIndex((p) => p.id == id);
    products.splice(index, 1);
    localStorage.setItem("productdb", JSON.stringify(products));
    dispatch(asyncLoadProducts());
    toast.success("Product deleted");
  } catch (error) {
    toast.error("Something went wrong");
  }
};
