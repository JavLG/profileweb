import styles from "./activityItem.module.css";
import { useState, useEffect } from 'react';

const ActivityItem = ({activity, commitHistory, i}) => {
  const [toggleCommits, setToggleCommits] = useState(false);
  const [commits, setCommits] = useState([]);

    const showCommits = (event) => {
      event.preventDefault();
      setToggleCommits(!toggleCommits);
      console.log(commits);
    }

  useEffect(() => {
    if(activity !== undefined && commitHistory !== undefined){
    setCommits(commitHistory[activity].slice(0,5))
    }
  },[])

  return (
    <div>
    <a onClick={showCommits} key={i} className="my-3 w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div className="flex items-center justify-between px-4 py-2">
    <div className="flex content-center items-center">

      <img src="./assets/images/githubIcon.png" className={styles.img}/><span>{activity}</span>
      {toggleCommits === true && commits ? commits.map(commit => 
      <div className="flex flex-row">
        <img src={commit.profilePic} className="w-7 h-7 rounded-lg border-2 border-indigo-600"/>
        <p className="">{commit.author}</p>
        <p className="">{commit.date}</p>
        <p className="">{commit.message}</p>
        <p className="">{commit.author.name}</p>
        </div>) : null}
      <div>

      </div>
    </div>
    </div>
    </a>
    </div>
  );
};

async function getServerSideProps(props){
console.log(props)
}



export default ActivityItem;