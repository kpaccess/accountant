import React from 'react';
import {
  AiFillPhone,
  AiOutlineMail,
} from 'react-icons/ai';
import {
  AiFillFacebook,
  AiTwotoneEnvironment,
} from 'react-icons/ai';

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="max-w-[1140px] m-auto w-full p-4 py-16"
    >
      <div className="absolute top-[80%] md:-[50%] max-w-[600px]h-full flex flex-col text-white p-4 bg-gray-800 md:left-[15%]">
        <h1 className="text-4xl text-red-500">
          Contact Us
        </h1>
        <ul>
          <li className="text-3xl flex ">
            <AiFillPhone className="mr-2" />{' '}
            416-694-8446
          </li>
          <li className="text-3xl ">
            <a
              href="mailto:tejcpainfo@gmail.com"
              className="flex"
            >
              <AiOutlineMail className="mr-2" />{' '}
              tejcpainfo@gmail.com
            </a>
          </li>
          <li className="text-3xl ">
            <a
              href="http://www.facebook.com/tajendra.khatiwada.5"
              className="flex"
            >
              <AiFillFacebook className="mr-2" />
              http://www.facebook.com/tajendra.khatiwada.5
            </a>
          </li>
          <li className="text-3xl flex">
            <AiTwotoneEnvironment />
            Toronto (Virtual Services Across
            Ontario)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
