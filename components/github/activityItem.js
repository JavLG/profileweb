import styles from "./activityItem.module.css";
import LastActivity from "../utils/Time/LastActivity";

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
      `https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${activity.name}/commits`,
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
    <div className="w-5/6">
      <a
        onClick={showCommits}
        key={i}
        className={` my-2 text-sm md:text-2xl flex justify-start items-center 
        p-3 w-full h-14 bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform ${
          toggleCommits ? "-translate-y-1 scale-110" : ""
        }`}
        href="#"
      >
        <div className="w-full flex justify-between">
          <div className="flex">
            <img
              src="./assets/images/githubIcon.png"
              className="w-10 h-10 mx-2"
            />
            <p className="block m-0 p-0">{activity.name}</p>
          </div>
          <p className="ml-2 mt-3 text-xs text-gray-500">
            {LastActivity(activity.updated_at) === "Today"
              ? "Last updated: Today"
              : `Last updated: ${LastActivity(activity.updated_at)} days ago`}
          </p>
        </div>
      </a>

      {toggleCommits === true && commits
        ? commits.map((commit, j) => (
          <div className="hover:animate-pulse duration-1000 ease-in-out" key={`repo-${j}`}>
            <div className="w-full">
              <div
                className="flex my-3 p-2 w-full shadow-md rounded-md border-t-4 border-green-400 whitespace-nowrap
              text-sm items-center 
              "
                href="#"
              >
                <div className="flex w-full items-center">
                  <img
                    src={commit.profilePic}
                    className="w-7 h-7 rounded-full mr-2"
                  />

                  <p className="mx-3 font-semibold 
                  text-md sm:text-lg w-32 hidden md:block">
                    {commit.author}
                  </p>

                  <p className="mx-auto w-full max-w-3/7 text-sm md:text-md lg:text-lg px-1 overflow-hidden whitespace-normal truncate">
                    {commit.message}
                  </p>

                  <div className="ml-3 w-2/7 flex justify-end">
                  <div className="flex items-center flex-nowrap">
                  <p className="text-sm text-md text-blue-600 px-1 mx-2  w-24 overflow-hidden hidden lg:block">
                    {commit.sha}
                  </p>
                  <div className="px-2 py-1.1 text-sm shadow-sm font-medium tracking-wider border text-green-600 rounded-full">
                    <p>{moment(commit.date).format("MMM Do YYYY")}</p>
                    <p className="">
                      {moment(commit.date).format(" HH:MM")}
                    </p>
                  </div>
                </div>
                </div>
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
