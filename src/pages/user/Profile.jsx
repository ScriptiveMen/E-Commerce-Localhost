import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDeleteUser,
  asyncUpdateUser,
} from "../../store/actions/UsersAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name,
      username: user?.username,
      email: user?.email,
      password: user?.password,
      phonenumber: user?.phonenumber && user?.phonenumber,
    },
  });
  const UpdateUserHandler = (newuser) => {
    dispatch(asyncUpdateUser(user.id, newuser));
    toast.success("Profile Updated");
  };

  const DeleteUserHandler = () => {
    dispatch(asyncDeleteUser(user.id));
    toast.success("Profile Deleted");
  };

  return (
    <div className="w-full  min-h-[70vh] mb-30 md:min-h-[90vh] flex flex-col items-center md:justify-center gap-10">
      <div className="w-full ">
        <h1 className="md:text-6xl text-4xl font-black py-2">
          Account Details
        </h1>
      </div>
      <div className="top h-full w-full flex items-center bottom mt-5  gap-5 md:w-[40%] md:gap-4">
        <div className="photo h-30 w-30 rounded-full bg-gray-500 shadow flex items-center justify-center text-5xl text-white">
          {user.name[0].toUpperCase()}
        </div>
        <div className="text h-full w-1/2  ml-3 flex flex-col items-start gap-1">
          <div className="text-3xl md:text-4xl font-black">{user.name}</div>
          <div className="text-lg md:text-xl">{user.email}</div>

          {user.phonenumber && (
            <div className="text-lg md:text-xl">+91 {user.phonenumber}</div>
          )}

          <div className="flex items-center gap-1">
            {user.phonenumber ? (
              <>
                <i className="fa-solid fa-certificate text-[#63E6BE]"></i>{" "}
                <span className="text-gray-500">Verified</span>
              </>
            ) : (
              <>
                <span className="text-gray-500">Not Verified</span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="bottom flex w-full h-full  flex-col  gap-5 justify-between md:w-[40%] md:gap-9">
        <form
          className="flex items-end flex-col gap-4 md:gap-7"
          onSubmit={handleSubmit(UpdateUserHandler)}
        >
          <div className="flex flex-col w-full">
            <label htmlFor="name">Fullname</label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("name", {
                required: "Full Name is required",
                minLength: { value: 3, message: "At least 3 characters" },
              })}
              type="text"
              placeholder="Enter your fullname"
              id="name"
              name="name"
            />
            {errors?.name && (
              <small className="text-red-400">{errors.name.message}</small>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="phonenumber">Contact Number </label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("phonenumber", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numeric values are allowed",
                },
                maxLength: {
                  value: 10,
                  message: "Phone number must be exactly 10 digits",
                },
                minLength: {
                  value: 10,
                  message: "Phone number must be exactly 10 digits",
                },
              })}
              type="tel"
              placeholder="Enter your contact number"
              id="phonenumber"
              name="phonenumber"
            />
            {errors?.phonenumber && (
              <small className="text-red-400">
                {errors.phonenumber.message}
              </small>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="username">Create Username</label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("username", {
                required: "Username is required",
                pattern: {
                  value: /^[a-zA-Z0-9_]+$/,
                  message:
                    "Username can only contain letters, numbers, and underscores",
                },
              })}
              type="text"
              placeholder="Enter your username"
              id="username"
              name="username"
            />
            {errors?.username && (
              <small className="text-red-400">{errors.username.message}</small>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email">Email address</label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
              type="text"
              placeholder="Enter your email address"
              id="email"
              name="email"
            />
            {errors?.email && (
              <small className="text-red-400">{errors.email.message}</small>
            )}
          </div>
          <div className="flex flex-col w-full ">
            <label htmlFor="password">Create New Password</label>
            <input
              className="bg-[#ebe8e1] p-2 outline-0"
              placeholder="Enter your password here"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="text"
              id="password"
            />
            {errors?.password && (
              <small className="text-red-400">{errors.password.message}</small>
            )}
          </div>

          <div className="flex items-center justify-center gap-2">
            <button
              className="px-5 py-2 rounded-lg cursor-pointer hover:scale-95 duration-200 bg-black text-white"
              type="submit"
            >
              Update Account
            </button>
            <button
              onClick={DeleteUserHandler}
              className="px-5 py-2 rounded-lg cursor-pointer hover:scale-95 duration-200 bg-red-600 text-white"
              type="button"
            >
              Delete Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
