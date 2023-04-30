import React from "react";
import { FaQuoteLeft,FaQuoteRight,} from "react-icons/fa";


function Card(props) {
  let review = props.review;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] mx-auto z-[10]">
        <img src={review.image} className="w-[140px] h-[140px] rounded-full aspect-square z-[25]" />
      <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute z-[-10] top-[-6px] left-[10px]"></div>
      </div>
      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize">{review.name}</p>
      </div>
      <div className="text-center mt-1">
        <p className="text-violet-300 uppercase text-sm">{review.job}</p>
      </div>
      <div className="text-violet-500 mx-auto mt-5">
        <FaQuoteLeft />
      </div>
      <div className=" text-center mt-4 text-slate-500">{review.text}</div>
      <div className="text-violet-500 mx-auto mt-5">
        <FaQuoteRight />
      </div>
      
    </div>
  );
}

export default Card;
