import { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncCurrentUser,
  asyncLogoutUser,
} from "../store/actions/UsersAction";

const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    setisOpen(false);
    await dispatch(asyncLogoutUser());
    navigate("/");
  };
  const user = useSelector((state) => state.userReducer.users);

  const rendermenus = (
    <>
      {user?.isAdmin ? (
        <>
          <NavLink
            to={"/admin/manage-products"}
            className={({ isActive }) =>
              `py-3 cursor-pointer md:text-lg ${
                isActive ? "text-gray-400" : "text-black"
              }`
            }
            onClick={() => setisOpen(false)}
          >
            Manage Products
          </NavLink>

          <NavLink
            to={"/admin/list-users"}
            className={({ isActive }) =>
              `py-3 cursor-pointer md:text-lg ${
                isActive ? "text-gray-400" : "text-black"
              }`
            }
            onClick={() => setisOpen(false)}
          >
            Manage Users
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `py-3 cursor-pointer md:text-lg ${
                isActive ? "text-gray-400" : "text-black"
              }`
            }
            onClick={() => setisOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setisOpen(false)}
            to={"/about"}
            className={({ isActive }) =>
              `py-3 cursor-pointer md:text-lg ${
                isActive ? "text-gray-400" : "text-black"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setisOpen(false)}
            to={"/products"}
            className={({ isActive }) =>
              `py-3 cursor-pointer md:text-lg ${
                isActive ? "text-gray-400" : "text-black'"
              }`
            }
          >
            Products
          </NavLink>

          {user && (
            <NavLink
              onClick={() => setisOpen(false)}
              to={"/profile"}
              className={({ isActive }) =>
                `py-3 cursor-pointer md:text-lg ${
                  isActive ? "text-gray-400" : "text-black'"
                }`
              }
            >
              Profile
            </NavLink>
          )}
        </>
      )}

      <div className="absolute px-3 bottom-5 flex items-center justify-center gap-6 left-0 w-full md:static md:gap-5 md:w-auto">
        {user ? (
          <>
            <NavLink
              onClick={logoutHandler}
              className={`px-4 py-2 w-full text-center bg-black text-white focus:scale-95  rounded-sm border-1 md:text-lg `}
            >
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              onClick={() => setisOpen(false)}
              to={"/login"}
              className={`px-4 py-2 w-1/2 text-center bg-black text-white focus:scale-95  rounded-sm border-1 md:text-lg `}
            >
              Login
            </NavLink>

            <NavLink
              onClick={() => setisOpen(false)}
              to={"/register"}
              className={`px-4 py-2 w-1/2 text-center cursor-pointer focus:scale-95 rounded-sm border-1 md:text-lg`}
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </>
  );

  return (
    <div className="sticky z-500 bg-[#fdfbf5] top-0 left-0 w-full mb-5 flex items-center justify-between border-b pb-1 md:py-2">
      <div className="text-xl md:text-3xl  font-bold tracking-tight">
        Fyndora
      </div>

      <div className="px-2 py-1 font-bold tracking-tight flex items-center justify-center gap-3 md:gap-5 ">
        {user?.isAdmin ? (
          <>
            <NavLink
              to={"/admin/add-products"}
              className={({ isActive }) =>
                `py-3 cursor-pointer md:text-lg ${
                  isActive ? "text-gray-400" : "text-black"
                }`
              }
              onClick={() => setisOpen(false)}
            >
              Add Product
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to={"/cart"}
              className={({ isActive }) =>
                `py-3 cursor-pointer md:text-lg ${
                  isActive ? "text-gray-400" : "text-black'"
                }`
              }
            >
              Cart({user?.cart?.length > 0 ? user?.cart?.length : 0})
            </NavLink>
          </>
        )}

        {/* product section */}

        <div className="hidden gap-5 md:flex items-center">{rendermenus}</div>

        <NavLink
          onClick={() => setisOpen(!isOpen)}
          className={`font-medium text-xl flex items-center justify-center w-5 h-5 md:hidden`}
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </NavLink>

        <div
          className={`fixed top-0 pb-1 right-0 h-full w-[100%] z-[100] bg-[#fdfbf5] transition-transform duration-300 ease-in-out px-3 shadow
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
        >
          <div className="flex items-center justify-between py-3 px-4 border-b">
            <h1 className="text-xl font-extrabold py-1">Menu</h1>
            <NavLink
              onClick={() => setisOpen(false)}
              className="font-medium text-xl flex items-center justify-center w-5 h-5"
            >
              <i className="fa-solid fa-xmark text-2xl "></i>
            </NavLink>
          </div>

          <div className="flex flex-col px-4 mt-4 gap-4">{rendermenus}</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
