import React from 'react';

const Section4 = () => {
  return (
    <div>
      <section className="bg-gray-800 pattern py-20">
            <div className="max-w-5xl px-6 mx-auto text-center">
              <h2 className="text-2xl font-semibold text-white">Projects</h2>

              <div className="flex items-center justify-center mt-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="max-w-xs w-full">
                    <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                      <img
                        className="object-cover h-8"
                        src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg"
                        alt=""
                      />
                    </div>

                    <a
                      href="#"
                      className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    >
                      <div className="py-2 px-3 text-center text-sm">
                        <p className="text-gray-300">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>

                        <span className="block text-gray-500 mt-2">
                          tailwindcomponents.com
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="max-w-xs w-full">
                    <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                      <img
                        className="object-cover h-8"
                        src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg"
                        alt=""
                      />
                    </div>

                    <a
                      href="#"
                      className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    >
                      <div className="py-2 px-3 text-center text-sm">
                        <p className="text-gray-300">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>

                        <span className="block text-gray-500 mt-2">
                          tailwindcomponents.com
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="max-w-xs w-full">
                    <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                      <img
                        className="object-cover h-8"
                        src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg"
                        alt=""
                      />
                    </div>

                    <a
                      href="#"
                      className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    >
                      <div className="py-2 px-3 text-center text-sm">
                        <p className="text-gray-300">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>

                        <span className="block text-gray-500 mt-2">
                          tailwindcomponents.com
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center mt-12">
                <a
                  className="flex items-center text-white hover:underline hover:text-gray-200"
                  href="#"
                >
                  <span>View More On Github</span>

                  <svg
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section>
    </div>
  );
};

export default Section4;