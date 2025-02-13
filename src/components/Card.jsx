import React from "react";

function Card({ image, text }) {
  return (
    <div className="flex flex-col justify-center items-center bg-base-200 text-center p-4 rounded-lg shadow-lg w-40 h-52 font-medium hover:bg-base-300 transition border border-gray-300">
      {/* Image */}
      <img src={image} alt="Card" className="w-24 h-24 rounded-md mb-2" />

      {/* Text */}
      <span className="text-lg font-semibold">{text}</span>
    </div>
  );
}

export default Card;
