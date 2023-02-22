import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[30%] md:-[50%] max-w-[600px]h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl text-rose-800">
            GURANTEED MAXIMUM TAX REFUND!!!
          </h1>
        </div>
      </div>
      <div className="absolute top-[40%] md:-[50%] max-w-[600px]h-full flex flex-col text-white p-4 bg-gray-800 md:left-[15%]">
        <h1 className="text-4xl">Our Services</h1>
        <ul>
          <li className="text-3xl">
            Tax Returns Preperation: T1, T2, T3
          </li>
          <li className="text-3xl">
            Tax Advice and Planning by Chartered
            Professional Accountants
          </li>
          <li className="text-3xl">
            Accounting and Bookkeeping for
            Business
          </li>
          <li className="text-3xl">
            Business Registration, Set up and
            Advisory
          </li>
          <li className="text-3xl">
            Payroll, HST, WSIB, EHT Services
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
