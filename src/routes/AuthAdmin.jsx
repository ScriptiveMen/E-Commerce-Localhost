import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthAdmin = (props) => {
  const user = useSelector((state) => state.userReducer.users);

  return user?.isAdmin ? props.children : <Navigate to="/" />;
};

export default AuthAdmin;
