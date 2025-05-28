import React from "react";

const Contactus = () => {
  return (
    <div className="w-full p-4 max-w-3xl mx-auto">
      <h2 className="font-semibold text-2xl md:text-4xl">Contact us</h2>

      <form action="">
        <div className="w-full md:pr-50 space-y-4 bg-blue-100 rounded-sm p-4 mt-4">
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <label htmlFor="name" className="text-base md:text-lg">
              Name
            </label>
            <input 
              type="text" 
              id="name"
              placeholder="Enter your name" 
              className="w-full md:w-80 rounded-sm p-1 px-2 bg-blue-50" 
            />
          </div>
          
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <label htmlFor="email" className="text-base md:text-lg">
              Email
            </label>
            <input 
              type="email" 
              id="email"
              placeholder="Enter your email" 
              className="w-full md:w-80 rounded-sm p-1 px-2 bg-blue-50" 
            />
          </div>
          
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <label htmlFor="mobile" className="text-base md:text-lg">
              Mobile no
            </label>
            <input
              type="number"
              id="mobile"
              className="w-full md:w-80 rounded-sm p-1 px-2 bg-blue-50"
              pattern="\d{10}"
              min="1000000000"
              max="9999999999"
              placeholder="Enter 10-digit number"
              onInput={(e) => {
                if (e.target.value.length > 10) {
                  e.target.value = e.target.value.slice(0, 10);
                }
              }}
            />
          </div>
          
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <label htmlFor="subject" className="text-base md:text-lg">
              Subject
            </label>
            <input 
              type="text" 
              id="subject"
              placeholder="Enter your subject" 
              className="w-full md:w-80 rounded-sm p-1 px-2 bg-blue-50" 
            />
          </div>

          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <label htmlFor="message" className="text-base md:text-lg self-start md:self-center">
              Message
            </label>
            <textarea 
              id="message"
              placeholder="Enter any message" 
              className="w-full md:w-80 h-40 rounded-sm p-1 px-2 bg-blue-50" 
            />
          </div>

          <button 
            type="submit" 
            className="mt-2 px-4 py-2 rounded-sm bg-blue-500 text-lg hover:bg-blue-600 text-white md:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactus;