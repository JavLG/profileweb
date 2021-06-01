import React, { useState, useEffect } from 'react';
import ActivityItem from './activityItem';

const Activities = () => {

  const [activityList, setActivityList] = useState([]);
 
  console.log(process.env.NEXT_PUBLIC_GITHUB_TOKEN,process.env.NEXT_PUBLIC_MY_NAME, process.env.NEXT_PUBLIC_GITHUB_USERNAME)
  useEffect( async () => {
    const response = await fetch(`https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`,{headers: {
      Authorization: `Authorization: token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      "Content-Type": "application/json"
  }}).then(res => {
    
    return res.json()

  }).catch(e => console.log(e));
    console.log(response, typeof response, process.env.NEXT_PUBLIC_MY_NAME)
    setActivityList(response.filter(({fork}) => fork === false).map(({name}) => name));
    console.log(activityList)
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