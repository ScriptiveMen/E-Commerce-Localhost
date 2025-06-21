import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

import Home from "../pages/user/Home";

const Cart = lazy(() => import("../pages/user/Cart"));
const Products = lazy(() => import("../pages/user/Products"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const About = lazy(() => import("../pages/user/About"));
const ProductDetails = lazy(() => import("../pages/ProductDetail"));
const Profile = lazy(() => import("../pages/user/Profile"));
const AddProduct = lazy(() => import("../pages/admin/AddProduct"));
const ManageProducts = lazy(() => import("../pages/admin/ManageProducts"));
const Users = lazy(() => import("../pages/admin/Users"));
const UpdateProduct = lazy(() => import("../pages/admin/UpdateProduct"));
const AuthAdmin = lazy(() => import("./AuthAdmin"));
const AuthUser = lazy(() => import("./AuthUser"));

import { useSelector } from "react-redux";

const Mainroutes = () => {
  const user = useSelector((state) => state.userReducer.users);

  return (
    <Routes>
      <Route
        path="/"
        element={
          user?.isAdmin ? <Navigate to="/admin/add-products" /> : <Home />
        }
      ></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      ></Route>
      <Route path="/about" element={<About />}></Route>
      <Route
        path="/cart"
        element={!user ? <Navigate to="/login" /> : <Cart />}
      ></Route>

      {/* protected user routes */}
      <Route
        path="/profile"
        element={
          <AuthUser>
            <Profile />
          </AuthUser>
        }
      ></Route>

      {/* protected admin routes */}
      <Route
        path="/admin/add-products"
        element={
          <AuthAdmin>
            <AddProduct />
          </AuthAdmin>
        }
      ></Route>
      <Route
        path="/admin/manage-products"
        element={
          <AuthAdmin>
            <ManageProducts />
          </AuthAdmin>
        }
      ></Route>
      <Route
        path="/admin/list-users"
        element={
          <AuthAdmin>
            <Users />
          </AuthAdmin>
        }
      ></Route>
      <Route
        path="/admin/update-product/:id"
        element={
          <AuthAdmin>
            <UpdateProduct />
          </AuthAdmin>
        }
      ></Route>

      {/* global routes */}
      <Route path="*" element={<PageNotFound />}></Route>
      <Route
        path="/products/view-details/:id"
        element={<ProductDetails />}
      ></Route>
    </Routes>
  );
};

export default Mainroutes;
