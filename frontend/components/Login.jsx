import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res);
        if (res.data) {
          console.log(res.data);
          toast.success(res.data.message);
        }
        localStorage.setItem("User", JSON.stringify(res.data.user));
        document.getElementById("my_modal_3").close();
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <div className="flex flex-col gap-10">
              <h3 className="font-bold text-lg">Login</h3>
              <label className="flex flex-col gap-2">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600 font-md">
                    This field is required
                  </span>
                )}
              </label>
              <label className="flex flex-col gap-2">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600 font-md">
                    This field is required
                  </span>
                )}
              </label>
              <div className="flex justify-around">
                <button className="p-2 bg-pink-600 text-white rounded ">
                  Login
                </button>
                <div>
                  <span>Not registered?</span>
                  <Link to="/signup" className="text-blue-600 underline">
                    Signup
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
