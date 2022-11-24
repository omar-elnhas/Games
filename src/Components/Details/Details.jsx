import React from 'react'
import axios from "axios";
import { useState } from 'react';

export default function Details() {

const [itemDetails, setItemDetails] = useState([])

    let options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: {id: '452'},
        headers: {
          'X-RapidAPI-Key': '8eddb036c5mshd50053fe2efe263p123503jsn2adbd84280ca',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
    
    



axios.request(options).then(function (response) {
    
    setItemDetails(response.data);
    
}).catch(function (error) {
	
});
  return (
    <>
    <div className="row gy-5 my-5">

<div className="col-md-8">
<img className='w-100' src={itemDetails.thumbnail} alt="" />

</div>


<div  className="col-md-4">
 
  <div className='p-3'>
  
  <h3 className='   my-2 '>{itemDetails.title}</h3>
  <p>{itemDetails.description} <br /><span className='text-info'>Read More</span></p>
  <a className='nav-link  text-muted' href={itemDetails.freetogame_profile_url}>{`go to${itemDetails.title}`}</a>
  </div>

</div>


</div>
    
    </>
  )
}
