import axios from 'axios';
import { useState,useEffect , useRef} from 'react';
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";

import './Home.css'
export default function Home() {

  const [all, setAll] = useState([]);
  const [isLoading, setIsLodaing] = useState(true);
  const tempOptions = useRef()
const dataOptions=()=>{
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {'sort-by': 'popularity'},
      headers: {
        'X-RapidAPI-Key': '4f1c54e50dmshf91ed5579504681p1d01aajsna895d78fad75',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      setAll(response.data);
      setIsLodaing(false)
    }).catch(function (error) {
      console.error(error);
      setIsLodaing(true)

    });
  }
  
  tempOptions.current=dataOptions



    useEffect(() => {
      // axios.request(options).then(function (response) {
      //   console.log(response.data);
      //   setAll(response.data);
      //   setIsLodaing(false)
      // }).catch(function (error) {
      //   console.error(error);
      //   setIsLodaing(true)
  
      // });
      tempOptions.current()
    }, [])




  return (
      <>
                  <Helmet>
         <meta charSet="utf-8" />
        <title>Home</title>
      
         </Helmet>
    <section className='w-100 '>
      <div className='HomebgPage '>
      <div className='layerHome py-2'>
        <div className='m-auto text-center py-5 '>
        <h1 className='pt-4 text-light'>Find & track the best <span className='text-info'>free-to-play</span> games!</h1>
        <p className='text-light'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
        <Link to="/All" className='btn btn-dark btn-outline-secondary'>Browse Game</Link>
        </div>
        </div>
      </div>
    </section>

     



    <div className="container py-4">
    {isLoading && (<div className="d-felx justify-content-center align-item-center">
          <div className='text-center text-white'>
          <span className="loader"></span>
          </div>
        </div>
    )}
      <div className='d-flex justify-content-start py-3'>

      <i className="fa-solid text-white fa-robot fs-4 my-auto pe-2"></i>
      <h2 className='text-secondary'>Personalized Recommendations</h2>

      </div>
      
    <div className="row g-3 ">

   

      {all?.filter((all)=>all.thumbnail !==null).slice(0,3).map((item,index)=>    
      <div key={index} className="col-xl-4 col-md-6">

<Link to={`/details/${item.id}`} className=' nav-link'>
  <div className='card-info'>

      <div className="rounded-2 card  border-0" >
    <img src={item.thumbnail} className="rounded-top card-img-top" alt="..."/>

  <div className="card-body body text-dark ">
  <div className='d-flex justify-content-between'>
      <h5 className="h6 card-title">{item.title?.split(" ").splice(0,3).join(" ")} </h5>
      <span className=' px-1 btn btn-sm btn-dark'>Free</span>
      </div>
      <p className="card-text">{item.short_description?.split(" ").splice(0,2).join(" ")}</p>
        <div className='d-flex justify-content-between'>
        <i class="fa-solid fs-3 fa-gamepad"></i>
        <div >
        <span className='bg-secondary rounded-pill px-2 py-1 mx-2'>{item.genre}</span> 
      
      {item.platform ==='PC (Windows)'?<i class="fs-3 fa-solid fa-laptop"></i>
              :<i class="fa-brands fs-3 fa-chrome"></i>}
        </div>
        </div>

    

    </div> 
  </div>
  </div>
  </Link>


      </div>)} 
      

    </div>
    
  </div>
      </>

    )
}
