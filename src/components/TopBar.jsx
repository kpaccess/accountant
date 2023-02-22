import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { MdAccountBalance } from 'react-icons/md';

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <MdAccountBalance
          size={30}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="text-xl font-bold text-gray-700">
          TEJ CPA PROFESSIONAL CORPORATION
        </h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone
            size={20}
            className="mr-2 text-[var(--primary-dark)]"
          />
          <p className="text-sm text-gray-700">
            416-694-8446
          </p>
        </div>

        <button
          onClick={() =>
            (window.location =
              'mailto:tejcpainfo@gmail.com')
          }
          className="bg-green-600 md:mr-8"
        >
          Get an APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default TopBar;
