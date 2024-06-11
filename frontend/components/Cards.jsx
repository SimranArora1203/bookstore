import React from "react";

const Cards = ({ item }) => {
  return (
    <div>
      <div className="card w-92 bg-base-100 shadow-xl flex flex-cols gap-0 hover:scale-105 duration-200 bg-pink-100 p-4 text-black">
        <figure>
          <img src={item.image} alt="Shoes" className="h-52 rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline px-3 py-3 hover:bg-pink-500 duration-300">
              ${item.price}
            </div>
            <div className="badge badge-outline px-3 py-3 hover:bg-pink-500 duration-300">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
