import styles from "./activityItem.module.css";
import { useState, useEffect } from "react";

const ActivityItem = ({ activity, commitHistory, i }) => {
  const [toggleCommits, setToggleCommits] = useState(false);
  const [commits, setCommits] = useState([]);

  const showCommits = (event) => {
    event.preventDefault();
    setToggleCommits(!toggleCommits);
  };

  useEffect(async () => {
    const response = await fetch(
      `https://api.github.com/repos/javLG/${activity}/commits`,
      {
        headers: {
          Authorization: `Authorization: token ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .catch((e) => console.log(e));

    setCommits(
      response.map((elem) => {
        return {
          sha: elem["sha"].substring(0, 7),
          author: elem["commit"]["author"].name,
          date: elem["commit"]["author"].date,
          message: elem["commit"]["message"],
          url: elem["commit"]["url"],
          profilePic: elem["author"].avatar_url,
        };
      }).slice(0,5)
    );
  }, [activity]);

  return (
    <div>
      <a
        onClick={showCommits}
        key={i}
        className="flex justify-start items-center mx-4 
        whitespace-nowrap p-3 my-3 w-full h-14 bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        href="#"
      >
        <img src="./assets/images/githubIcon.png" className="w-10 h-10 mx-2" />
        <p className="block m-0 p-0">{activity}</p>
        </a>

            
            {toggleCommits === true && commits
              ? commits.map((commit, j) => 
                <div
                key={j}
                className="my-3 w-96 block bg-white shadow-md rounded-md border-t-4 border-green-400 whitespace-nowrap"
                href="#"
              >
                <div className="flex items-center justify-between px-4 py-2">
                  <div className="flex content-center items-center">
                    <img
                      src={commit.profilePic}
                      className="w-7 h-7 rounded-lg border-2 border-indigo-600"
                    />
                    <p className="">{commit.author}</p>
                    <p className="">{commit.date}</p>
                    <p className="">{commit.message}</p>
                    <p className="">{commit.author.name}</p>
                  </div>
                  </div>
                  </div>
                )
              : null }
            <div>
        </div>

    </div>
  );
};

export default ActivityItem;
