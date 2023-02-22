import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-full">
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="w-full h-full object-fill lg:h-[50rem]"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[30%] md:-[50%] max-w-[600px]h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl text-white">
            GURANTEED MAXIMUM TAX REFUND!!!
          </h1>
          <p>
            File with Our Tax Experts and Get Your
            Refund Instantly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
