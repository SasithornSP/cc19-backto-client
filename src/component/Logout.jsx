import useAuthStore from "../store/auth-store";
import { createAlert } from "../utils/createAlert";
import { Navigate, useNavigate } from "react-router";

function Logout() {
  const actiontLogout = useAuthStore((state) => state.actiontLogout);
  const Navigate = useNavigate();
  const hdlLogout = () => {
    // console.log("Hello, Logout");
    createAlert("success", "Logout success");
    actiontLogout();
    Navigate("/");
  };
  return (
    <div className="text-amber-50">
      <button className="hover:cursor-pointer" onClick={hdlLogout}>
        Logout
      </button>
    </div>
  );
}
export default Logout;
