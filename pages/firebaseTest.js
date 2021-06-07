
import * as firebaseTools from '../services/firebaseClient';
import { useEffect, useState } from 'react';

const firebaseTest = () => {

  const [data, setData] = useState([])

  async function  retrieveData(){
    const response = await firebaseTools.getProjects()
    console.log(typeof response, response);
    return response;
  }
  
  useEffect(async () => {
    const response = await retrieveData();
    setData(response)
  },[])
  



  return (
    <>
    {JSON.stringify(data)}
    {data ? data.map(proy => {
      <pre className="flex w-96 text-md mx-auto">

        {proy}

      </pre>
      }): null}
    </>
  );
};


export default firebaseTest;