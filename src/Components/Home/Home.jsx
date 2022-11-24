import React from 'react'
// import { useEffect } from 'react'
import  axios  from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
  const [homeGames, setHomeGames] = useState([])


const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
  params: {tag: '3d.mmorpg.fantasy.pvp', platform: 'pc'},
  headers: {
    'X-RapidAPI-Key': '8eddb036c5mshd50053fe2efe263p123503jsn2adbd84280ca',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	setHomeGames(response.data);
}).catch(function (error) {
	console.error(error);
});



  return (
    <>
    <div className="row gy-4 ">

      {homeGames.slice(15,18).map((item,index)=>
      
      
      <div key={index} className="col-4 ">
        <Link to="/details" className='nav-link'>
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
