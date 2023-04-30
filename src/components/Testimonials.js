import React, { useState } from "react";
import Card from "./Card";
import {AiOutlineRight, AiOutlineLeft,} from "react-icons/ai"

function Testimonials(props) {
  const [index, setIndex] = useState(0);
  function leftShiftHandler(){
    if(index - 1 < 0){
      setIndex(reviews.length -1);
    }else{
      setIndex(index-1);
    }
  }
  function rightShiftHandler(){
    if(index+1 >= reviews.length){
      setIndex(0);
    }else{
      setIndex(index+1); 
    }
  }
  function surpriseHandler(){
    let randomIndex = Math.floor(Math.random()*reviews.length);
    setIndex(randomIndex);
  }
  let reviews = props.reviews;
  return (
    <div className="w-[85vw] h-[50vh] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-200 hover:shadow-md rounded-md">
      <Card review={reviews[index]} />
      <div className="text-2xl font-bold text-violet-400 mt-5 gap-3 mx-auto">
        <button onClick={leftShiftHandler} className="hover:text-violet-500">
          <AiOutlineLeft />
        </button>
        <button onClick={rightShiftHandler} className="hover:text-violet-500">
          <AiOutlineRight />
        </button>
      </div>
      <div>
        <button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-lg text-white mt-4">
          Surprise me
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
