import React, { useEffect, useState } from 'react';
import {Button } from '@material-ui/core';
import './App.css';
import News from './component/News/News';
import Chart from './component/Chart/Chart';
import Axios from 'axios';

function App() {
  const [articles, setArticle] = useState([]);
  // useEffect( ()=> {
  //   const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1fd5ac840397475093caa20400d83bcb';
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setArticle(data.articles))
  // }, []);
  useEffect(()=>{
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1fd5ac840397475093caa20400d83bcb';
    Axios(url)
    .then(data=> setArticle(data.data.articles))
  },[])
  return (
    <div style={{margin :'50px'}}>
      <Chart></Chart>
      
      {
        articles.map(article => <News article = {article}></News>)
      } <br/>
     <Button variant="contained" color="primary">click me</Button>

    </div>
  );
}

export default App;
