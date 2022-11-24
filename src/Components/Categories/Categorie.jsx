import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Categorie() {
  const [categoriGames, setCategoriGames] = useState([])
  

  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {category: 'shooter'},
    headers: {
      'X-RapidAPI-Key': '8eddb036c5mshd50053fe2efe263p123503jsn2adbd84280ca',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    setCategoriGames(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  return (
    <>
    <div className="row gy-4">

      {categoriGames.slice(85,120).map((item,index)=>
      
      <div key={index} className="col-md-3">
        <Link className='nav-link' to="/details">
        <div className='p-3'>
        <img className='w-100' src={item.thumbnail} alt="" />
        <h5 className=' text-muted  my-2 '>{item.title}</h5>
        </div>
      </Link>
      <a className='nav-link text-center text-info' href={item.freetogame_profile_url}>{`go to${item.title}`}</a>
      </div>
      
      )}
    </div>
    
        </>
  )
}
