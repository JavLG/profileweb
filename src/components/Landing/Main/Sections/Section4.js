import React, {useState, useEffect} from 'react';
import * as firebaseTools from '../../../../../services/firebaseClient';
import CardContainer from '../../../Card/CardContainer';

const Section4 = () => {


  const [data, setData] = useState([])

  async function  retrieveData(){
    const response = await firebaseTools.getProjects()
    return response;
  }
  
  useEffect(async () => {
    const response = await retrieveData();
    setData(response)
  },[])
  


  return (
    <div>
      <section className="bg-white pattern py-20">
            <div className="max-w-5xl px-6 mx-auto text-center">
              <h2 className="text-2xl font-semibold text-black">Projects</h2>

              <div className="flex items-center justify-center mt-10">
              <CardContainer projectData={data}/>
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