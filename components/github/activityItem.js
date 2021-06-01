import styles from "./activityItem.module.css";
import { useState, useEffect } from "react";
import moment from "moment";

const ActivityItem = ({ activity, i }) => {
  const [toggleCommits, setToggleCommits] = useState(false);
  const [commits, setCommits] = useState([]);

  const showCommits = (event) => {
    event.preventDefault();
    setToggleCommits(!toggleCommits);
  };

  // Nombre funciones infinitivo siempre!!

  const filterCommits = (rawCommits) => {
    return rawCommits.map((elem) => {
      return {
        sha: elem["sha"].substring(0, 7),
        author: elem.commit.author.name,
        date: elem.commit.author.date,
        message: elem.commit.message,
        url: elem.commit.url,
        profilePic: elem.author.avatar_url,
      };
    });
  };

  useEffect(async () => {
    const response = await fetch(
      `https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${activity}/commits`,
      {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .catch((e) => console.log(e));

    setCommits(filterCommits(response));
  }, [activity]);

  return (
    <div className='w-5/6 mx-auto'>
      <a
        onClick={showCommits}
        key={i}
        className={`text-sm md:text-2xl flex justify-start items-center mx-4 
        p-3 my-3 w-full h-14 bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform ${
          toggleCommits ? "-translate-y-1 scale-110" : ""
        }`}
        href="#"
      >
        <img src="./assets/images/githubIcon.png" className="w-10 h-10 mx-2" />
        <p className="block m-0 p-0">{activity}</p>
      </a>

      {toggleCommits === true && commits
        ? commits.map((commit, j) => (
          <div className='mx-auto w-full'>
            <div
              key={j}
              className="flex mx-0 md:mx-auto my-3 w-full bg-white shadow-md rounded-md border-t-4 border-green-400 whitespace-nowrap"
              href="#"
            >
              <div className="w-full flex items-center content-between px-6 py-2 mr-3">
                <div className="w-full flex content-between items-center gap-x-3">
                  <div className="w-full flex content-center items-center">
                    <div className="w-full flex flex-row gap-x-4 content-between items-center mx-auto">
                      <img
                        src={commit.profilePic}
                        className="w-7 h-7 rounded-xl border-2 border-indigo-600"
                      />

                      <p className="text-sm shadow-sm tracking-wider w-32 hidden md:block">{commit.author}</p>
                      <p className="shadow-sm text-xl rounded-lg px-1  w-32 md:w-full overflow-hidden">{commit.message}</p>

                      
                      <p className="text-sm shadow-sm text-md text-blue-600 rounded-lg px-1  w-24 overflow-hidden hidden lg:block">{commit.sha}</p>
                    </div>
                    
                  </div>
                  
                </div>
                <div className="whitespace-nowrap">
                      <p className="px-1 py-1 text-sm shadow-sm font-medium tracking-wider border text-green-600 rounded-full inline-flex">
                        <p>{moment(commit.date).format("MMM Do YYYY")}</p>
                        <p className='hidden sm:block'>{moment(commit.date).format("-HH:MM")}</p>
                      </p>
                    </div>
              </div>
            </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default ActivityItem;
