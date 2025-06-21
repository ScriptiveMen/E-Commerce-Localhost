import { toast } from "react-toastify";
import { loaduser } from "../reducers/UserSlice";

export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(loaduser(user));
  } catch (error) {
    dispatch(loaduser(null));
  }
};

export const asyncLogoutUser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(loaduser(null));
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    let userDB = JSON.parse(localStorage.getItem("userdb"));
    const loggedInUser = userDB.find(
      (u) => u.email == user.email && u.password == user.password
    );

    if (loggedInUser) {
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      dispatch(loaduser(loggedInUser));
      toast.success("Login successful!");
    } else {
      toast.error("Invalid credentials!");
    }
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    let copyUserDB = JSON.parse(localStorage.getItem("userdb")) || [];
    copyUserDB.push(user);
    localStorage.setItem("userdb", JSON.stringify(copyUserDB));
    console.log(copyUserDB);
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
  try {
    localStorage.setItem("user", JSON.stringify(user));

    // 2. Update the user in "userdb"
    let userDB = JSON.parse(localStorage.getItem("userdb"));

    // Find index of user to update
    const userIndex = userDB.findIndex((u) => u.id == id);

    if (userIndex !== -1) {
      userDB[userIndex] = { ...userDB[userIndex], ...user };
      localStorage.setItem("userdb", JSON.stringify(userDB));
    }
    // dispatch(loaduser(user));
    dispatch(asyncCurrentUser());
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const asyncDeleteUser = (id) => async (dispatch, getState) => {
  try {
    let userDB = JSON.parse(localStorage.getItem("userdb"));
    const userIndex = userDB.findIndex((u) => u.id == id);
    userDB.splice(userIndex, 1);
    localStorage.setItem("userdb", JSON.stringify(userDB));

    dispatch(asyncLogoutUser());
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

// where it is used???
export const asyncDeleteAllUser = (id) => async (dispatch, getState) => {
  try {
    let userDB = JSON.parse(localStorage.getItem("userdb"));
    const userIndex = userDB.findIndex((u) => u.id == id);
    userDB.splice(userIndex, 1);
    localStorage.setItem("userdb", JSON.stringify(userDB));
  } catch (error) {
    toast.error("Something went wrong!");
  }
};
