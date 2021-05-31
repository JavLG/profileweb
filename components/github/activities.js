import React, { useState, useEffect } from 'react';
import ActivityItem from './activityItem';
import axios from 'axios';

const Activities = () => {

  const [activityList, setActivityList] = useState([]);
  const [commitHistory, setCommitHistory] = useState({});
  let commitsPerRepo = {};
  useEffect( async () => {
    const response = await axios.get("https://api.github.com/users/JavLG/repos",{headers: {
      Authorization: `Authorization: token ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json"
  }}).then(res => {
    return Object.keys(res['data']).map(key => res['data'][key].name)
  }).catch(e => console.log(e));
    setActivityList(response);
  },[])

  useEffect( async () => {
    
    activityList.forEach(async (activity) => {
      
      await axios.get(`https://api.github.com/repos/javLG/${activity}/commits`,{headers: {
        Authorization: `Authorization: token ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json"
    }}).then(res =>{ 

    commitsPerRepo[activity] = res["data"].map(elem => 
      {

      return {
        "sha":elem["sha"].substring(0, 7),
        "author":elem["commit"]["author"].name,
        "date":elem["commit"]["author"].date,
        "message":elem["commit"]["message"],
        "url":elem["commit"]["url"],
        "profilePic":elem["author"].avatar_url,
      }
  
    })
    }).catch(e => assert(e))
  })
  await setCommitHistory(commitsPerRepo)
  console.log(commitHistory)
}
   ,[activityList])
  
  

  return (
    <div className="w-full mx-5">
      {commitHistory && activityList.map((activity, i) => 
      <ActivityItem 
      activity={activity} 
      commitHistory={commitHistory} 
      key={i}/>
      )}
    </div>
  );
}

export default Activities;