import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="font-bold text-4xl">Our Testimonials</h1>
        <div className="bg-violet-400 w-1/5 h-[4px] mt-1 mx-auto"></div>
        <Testimonials reviews={reviews}/>
      </div>
    </div>
  );
};

export default App;
