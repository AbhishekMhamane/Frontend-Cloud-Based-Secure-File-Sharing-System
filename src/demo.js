import React,{useEffect} from 'react'
import axios from 'axios';

const demo = () => {

    useEffect(async()=>{
        const res = await axios.get('http://localhost:3002/dooperations/maheshkadam@gmail.com/6249a290f292b4a29d54865a');
        console.log(res.data);
      },[]);

  return (
    <div>
        <h1>hiii</h1>
    </div>
  )
}

export default demo