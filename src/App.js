import React,{ useEffect, useState,createContext } from 'react';
import './App.css';
import Layout from './Containers/Layout/Layout';
import axios from 'axios';
import { ApiContext } from './Components/ApiContext';
import {ApiContext2} from './Components/ApiContext2';

function App() {
  const [state,setState] = useState([]);
  const [secondState,setsecondStata] = useState([]);
  useEffect(async ()=>{
    const result = await axios.get('https://internship-slick-api.herokuapp.com/api/banners');
    // console.log(result.data.data)
    setsecondStata(result.data.data);
  },[])
  useEffect(async ()=>{
   const result = await axios.get('https://internship-slick-api.herokuapp.com/api/products');
   setState(result.data.data)
    },[])
 let handleDelete=(e,id)=>{
      axios.delete(`https://internship-slick-api.herokuapp.com/api/products?${id}`).then(()=>{
          const newSecondState = secondState.filter((val)=>{
            return val._id!==id
          })
          setsecondStata(newSecondState);
      })
      }
   
 
  return (
    <ApiContext.Provider value={state}>
    <ApiContext2.Provider value={secondState}>
    <div className="App">
      <Layout val={secondState}/>
    </div>
    </ApiContext2.Provider>
   </ApiContext.Provider>
  );
}

export default App;
