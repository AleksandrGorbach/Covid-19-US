import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'

let URL = "https://api.covidtracking.com/v1/states/ca/current.json"

export default function Landing() {
    const [data,setData] = useState({})

    useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(URL);
      console.log(res.data)
      setData(res.data);
    };
    fetchData();
  }, []);


  return (
      <div>
       <div className="card-container">
        <h1>State: {data.state}</h1>
        <h1>Deaths: {data.death}</h1>
        <h1>Hospitalized: {data.hospitalizedCurrently}</h1>
      </div>
    </div>
  )
}
