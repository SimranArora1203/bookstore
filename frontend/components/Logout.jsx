import React from "react";
import { useAuth } from "../src/context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const handlelogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("User");
      toast.success("user logout");
      window.location.reload();
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-3 bg-red-500 text-white rounded-md cursor-pointers"
        onClick={handlelogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
