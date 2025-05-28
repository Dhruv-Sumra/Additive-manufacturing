import React from 'react'

const CTA = () => {
   return (
    <div className="px-5 mt-20 md:px-15 w-full h-auto space-x-3 flex flex-col justify-between align-middle">
      <div className=" w-full">
        <h2 className="text-xl md:text-3xl font-semibold">Ready to join india’s AM network?</h2>
        </div>

        <div className="w-full gap-5 md:flex flex">
            <a href="#">
              <button className="mt-6 transi text-white bg-blue-500 hover:bg-blue-600 py-1 md:py-2 cursor-pointer px-2 rounded-lg tracking-wide ">
                Apply Now
              </button>
            </a>

            <a href="#">
              <button className="mt-6 transi text-white bg-blue-500 hover:bg-blue-600 py-1 md:py-2 cursor-pointer px-2 rounded-lg tracking-wide">
                Download Button
              </button>
            </a>
          </div>

        
        </div>
  )
}

export default CTA