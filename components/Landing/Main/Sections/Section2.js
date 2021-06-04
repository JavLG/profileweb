import Activities from "../../../github/activities";

const Section2 = () => {
  return (
    <>
                
          <section className="bg-white py-20">
            <div className="mx-auto text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                Mi última actividad
              </h2>

              <div className="flex items-center justify-center w-full mt-1">
                <Activities />
              </div>

              <div className="flex items-center justify-center mt-12">
                <a
                  className="flex items-center text-gray-600 hover:underline hover:text-gray-500"
                  href="#"
                >
                  <span>Ver más!</span>

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
          

    </>
  );
};

export default Section2;