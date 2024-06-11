import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      message: data.message,
    };
    console.log(userInfo);
  };
  return (
    <div>
      <Navbar />
      <div className="h-screen flex justify-center items-center mt-52 h-96">
        <div className=" ">
          <div className="w-96 border-[2px] p-5">
            <form method="" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}

              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-lg">Contact Us</h3>
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
                  <span>Message</span>
                  <textarea
                    type="text"
                    placeholder="Type your message"
                    className="outline-none"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="text-red-600 font-md">
                      This field is required
                    </span>
                  )}
                </label>
                <div className="flex justify-around">
                  <button className="p-2 bg-pink-600 text-white rounded">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
// import React from "react";
// import Navbar from "../components/Navbar";
// import { useForm } from "react-hook-form";

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     const userInfo = {
//       fullname: data.fullname,
//       email: data.email,
//       message: data.message,
//     };
//     console.log(userInfo);
//   };

//   return (
//     <div className="overflow-hidden">
//       <Navbar />
//       <div className="flex justify-center items-center mt-20 h-full min-h-screen">
//         <div className="w-full max-w-md border-2 p-3">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="flex flex-col gap-3">
//               <h3 className="font-bold text-lg">Contact Us</h3>
//               <label className="flex flex-col gap-2">
//                 <span>Name</span>
//                 <input
//                   type="text"
//                   placeholder="Enter your fullname"
//                   className="outline-none p-2 border rounded"
//                   {...register("fullname", { required: true })}
//                 />
//                 {errors.fullname && (
//                   <span className="text-red-600 font-md">
//                     This field is required
//                   </span>
//                 )}
//               </label>
//               <label className="flex flex-col gap-2">
//                 <span>Email</span>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="outline-none p-2 border rounded"
//                   {...register("email", { required: true })}
//                 />
//                 {errors.email && (
//                   <span className="text-red-600 font-md">
//                     This field is required
//                   </span>
//                 )}
//               </label>
//               <label className="flex flex-col gap-2">
//                 <span>Message</span>
//                 <textarea
//                   placeholder="Type your message"
//                   className="outline-none p-2 border rounded h-24"
//                   {...register("message", { required: true })}
//                 />
//                 {errors.message && (
//                   <span className="text-red-600 font-md">
//                     This field is required
//                   </span>
//                 )}
//               </label>
//               <div className="flex justify-around">
//                 <button className="p-2 bg-pink-600 text-white rounded">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
