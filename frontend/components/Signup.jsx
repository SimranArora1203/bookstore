import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Login from "./Login";
import toast, { Toaster } from "react-hot-toast";
const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  console.log("from", from);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res) {
          toast.success(res.data.message);
        }
        localStorage.setItem("User", JSON.stringify(res.data.user));
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="">
        <div className="modal-box w-96">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <div className="flex flex-col gap-10">
              <h3 className="font-bold text-lg">Signup</h3>
              <label className="flex flex-col gap-2">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="outline-none"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-red-600 font-md">
                    This field is required
                  </span>
                )}
              </label>
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
                <button className="p-2 bg-pink-600 text-white rounded">
                  Signup
                </button>
                {/* <div>
                  <span>Have an account?</span>

                  <button
                    className=" text-blue-600"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </div> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
