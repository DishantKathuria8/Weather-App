import React,{useState}  from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Form from'../Weather App/form';
import Information from '../Weather App/info';
import axios from 'axios';

function App() {
  const [state,setState]= useState({});
  const getDataFromServer=(city)=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f08f9f9c778a064d4fa7ae821a34e5e`).then((res)=>{
          console.log(res.data);
          setState(res.data);
        },
        ()=>{
          alert("data not found");
        })
  }
    return(
      <div className="App mt-5">
          <h1 className="text-light">Weather App</h1>
          <Form getDataFromServer={getDataFromServer}/>
          {Object.keys(state).length===0?<div></div>:<Information info={state}/>}
      </div>
    )
  
}

export default App
