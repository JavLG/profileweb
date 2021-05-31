import React, { useState, useEffect } from 'react';
import ActivityItem from './activityItem';
import axios from 'axios';

const Activities = () => {

  const [activityList, setActivityList] = useState([]);

  useEffect( async () => {
    const response = await fetch("https://api.github.com/users/JavLG/repos",{headers: {
      Authorization: `Authorization: token ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json"
  }}).then(res => {
    return res.json()
  }).catch(e => console.log(e));
    setActivityList(response.map(({name}) => name));
  },[])

  

  
  

  return (
    <div className="w-full mx-5">
      {activityList && activityList.map((activity, i) => 
      <ActivityItem 
      activity={activity}
      key={i}/>
      )}
    </div>
  );
}

export default Activities;