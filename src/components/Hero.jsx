import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1610393144490-a930182ad2f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] md:-[50%] max-w-[600px]h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">
            Find Your Special Trip
          </h1>
          <h2 className="text-4xl py-4 italic">
            With Weekaway
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eos ut doloribus
            temporibus cupiditate fugit
            laboriosam, magnam aut. Mollitia
            delectus aspernatur facilis rem modi
            vitae optio sapiente, magnam,
            blanditiis nostrum cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
