import { asyncDeleteAllUser } from "../store/actions/UsersAction";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UsersCard = (props) => {
  const { id, name, email, phonenumber } = props.users;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const UserDeleteHandler = () => {
    dispatch(asyncDeleteAllUser(id));
    navigate("/");
    toast.success("Profile Deleted");
  };

  return (
    <div className="h-24 w-full  py-3 flex gap-3 items-center px-2 rounded bg-[#eae8e1] md:px-4 md:justify-between">
      <div className="top flex items-center justify-between w-full md:w-[70%] ">
        <div className="w-[30%] overflow-hidden relative font-bold md:text-xl">
          {name}
        </div>
        <div className="relative pr-4 md:text-xl">{email}</div>
        <div className="flex items-center justify-between gap-3">
          {phonenumber ? (
            <>
              <i className="fa-solid fa-certificate text-[#0f7f4d] md:text-2xl"></i>
            </>
          ) : (
            <>
              <i className="fa-solid fa-certificate text-[#f70808] md:text-2xl"></i>
            </>
          )}
        </div>
      </div>

      <div className="bottom">
        <button
          onClick={UserDeleteHandler}
          className="px-3 py-2 font-bold bg-red-500 text-white rounded-lg md:px-5 md:py-3 hover:scale-95 duration-200 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UsersCard;
