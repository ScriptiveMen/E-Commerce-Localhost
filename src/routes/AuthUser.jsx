import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthUser = (props) => {
  const user = useSelector((state) => state.userReducer.users);

  return user ? props.children : <Navigate to="/" />;
};

export default AuthUser;
