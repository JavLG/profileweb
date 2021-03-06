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
    setActivityList(response.filter(({fork}) => fork === false).map(({name, updated_at}) => {return {name,updated_at}}));
  },[])

  
  const sortData = (arr) => {
    let newArr =  arr.sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at))
    return newArr;
  }

 

  return (

    <div className="w-full flex flex-col items-center">
      {activityList && Object.keys(sortData(activityList)).map(idx =>
      {
      return (<ActivityItem 
      activity={activityList[idx]}
      key={`repo-${idx}`}/>
      )})}
    </div>
  );
}

export default Activities;