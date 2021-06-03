import React, { useState, useEffect } from 'react';
import ActivityItem from './activityItem';

const Activities = () => {

  const [activityList, setActivityList] = useState([]);
 

  useEffect( async () => {
    const response = await fetch(`https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`,{headers: {
      Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      "Content-Type": "application/json"
  }}).then(res => {
    
    return res.json()

  }).catch(e => console.log(e));
    setActivityList(response.filter(({fork}) => fork === false).map(({name}) => name));
    console.log(activityList)
  },[])

  

  
  

  return (

    <div className="w-full flex flex-col items-center">
      {activityList && activityList.map((activity, i) => 
      <ActivityItem 
      activity={activity}
      key={i}/>
      )}
    </div>
  );
}

export default Activities;