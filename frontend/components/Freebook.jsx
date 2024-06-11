import React from "react";
import list from "../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import axios from "axios";
const Freebook = () => {
  //   const filterData = list.filter((data) => data.category === "Free");
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1568,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //   console.log(filterData);
  return (
    <div className="p-10 flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">Free Offered Courses</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        sapiente possimus aut doloribus veniam, modi perferendis nihil,
        perspiciatis labore nemo, maxime tenetur molestiae.
      </p>
      <div className="">
        <Slider {...settings}>
          {book.map((item) => (
            <div key={item.id} className="">
              <div className="flex items-center justify-center h-full sm:w-full sm:p-0">
                <Cards item={item} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;
