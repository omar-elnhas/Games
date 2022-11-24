import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function SortBy() {
  const [sortedGames, setSortedGames] = useState([])


const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {'sort-by': 'alphabetical'},
  headers: {
    'X-RapidAPI-Key': '8eddb036c5mshd50053fe2efe263p123503jsn2adbd84280ca',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  // console.log(response.data);
	setSortedGames(response.data);
}).catch(function (error) {
	
});
  return (
    <>
    
    <div className="row gy-4">

      {sortedGames.slice(150,180).map((item,index)=>
      
      
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


// developer
// : 
// "Zemi Interactive"
// freetogame_profile_url
// : 
// "https://www.freetogame.com/4story"
// game_url
// : 
// "https://www.freetogame.com/open/4story"
// genre
// : 
// "MMORPG"
// id
// : 
// 306
// platform
// : 
// "PC (Windows)"
// publisher
// : 
// "Zemi Interactive"
// release_date
// : 
// "2008-10-20"
// short_description
// : 
// "A enjoyable MMORPG where you can customize your character, join guilds and battle other factions."
// thumbnail
// : 
// "https://www.freetogame.com/g/306/thumbnail.jpg"
// title
// : 
// "4Story"