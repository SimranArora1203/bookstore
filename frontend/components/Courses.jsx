import React from "react";
import { Link } from "react-router-dom";
// import list from "../public/list.json";
import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";
const Courses = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log("res", res);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <div className="min-h-screen mt-20 p-20 flex flex-col gap-10 ">
      <h1 className="text-2xl font-semibold flex justify-center items-center">
        We're delighted to have you{"  "}
        <span className="text-pink-600">Here! :)</span>
      </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit et,
        dolorum, eligendi fuga necessitatibus id quae, praesentium deserunt
        facilis nemo incidunt? Porro velit, ullam numquam quam modi nulla minima
        id eligendi pariatur mollitia aut est odit adipisci ab ipsa, quos rem
        necessitatibus ipsam architecto.
      </p>
      <Link to="/" className="flex justify-center items-center">
        <button className="bg-pink-600 px-5 py-3 rounded">Back</button>
      </Link>
      <div className="flex flex-wrap gap-10 justify-center items-center ">
        {book.map((item) => (
          <div className="w-fit-content">
            <Cards item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Cards from "./Cards";
// import axios from "axios";

// const Courses = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const getBooks = async () => {
//       try {
//         const res = await axios.get("http://localhost:4001/book");
//         setBooks(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getBooks();
//   }, []);

//   return (
//     <div className="min-h-screen mt-20 p-20 flex flex-col gap-10">
//       <h1 className="text-2xl font-semibold flex justify-center items-center">
//         We're delighted to have you{" "}
//         <span className="text-pink-600">Here! :)</span>
//       </h1>

//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit et,
//         dolorum, eligendi fuga necessitatibus id quae, praesentium deserunt
//         facilis nemo incidunt? Porro velit, ullam numquam quam modi nulla minima
//         id eligendi pariatur mollitia aut est odit adipisci ab ipsa, quos rem
//         necessitatibus ipsam architecto.
//       </p>
//       <Link to="/" className="flex justify-center items-center">
//         <button className="bg-pink-600 px-5 py-3 rounded">Back</button>
//       </Link>
//       <div className="flex flex-wrap gap-10 justify-center items-center">
//         {books.map((item) => (
//           <div key={item._id} className="w-fit-content">
//             <Cards item={item} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Courses;
