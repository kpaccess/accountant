import React from // useState, // useEffect,
// useRef,
'react';

const OurServices = () => {
  // const [data, setData] = useState([]);

  // const elRef = useRef();

  // useEffect(() => {
  //   const getWpData = async () => {
  //     const data = await fetch(
  //       'http://tej-cpa-accounting.local/wp-json/wp/v2/posts'
  //     );
  //     const res = await data.json();
  //     console.log(res[0].content);
  //     setData(res[0].content.rendered);
  //   };

  //   getWpData();
  // }, []);

  // function createMarkup() {
  //   return { __html: data };
  // }

  return (
    <div
      id="ourservices"
      className="max-w-[1140px] m-auto w-full p-4 py-16 bg-c-700/80"
    >
      <div className="">
        <h1 className="text-4xl text-red-500">
          Our Services
        </h1>

        {/* <div
          ref={elRef}
          dangerouslySetInnerHTML={createMarkup()}
        /> */}

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

export default OurServices;
