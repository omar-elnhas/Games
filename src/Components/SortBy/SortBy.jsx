import axios from 'axios';
import { useState,useEffect,useRef } from 'react';
import { Link,useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet'

export default function Alphabetical() {
    let params =useParams();

  const [all, setAll] = useState([]);
  const [visibale, setVisibale] = useState(20);
  const [isLoading, setIsLodaing] = useState(true);

  const tempOptions = useRef()

   
  const dataOptions=()=>{

    const options = {
        method: 'GET',
        url: `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${params.sortby}`,
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
        tempOptions.current()

        }, [params.sortby])

      const showMorePages = ()=>{
        setVisibale((prevValue)=>prevValue+20);
    }

  return (
    <>
            <Helmet>
         <meta charSet="utf-8" />
        <title>SortBy</title>
      
         </Helmet>
         <div className="container py-4">
    <div className="row pt-5">
        {isLoading && 
        (      <div className="col-md-12">
        <div className="d-felx justify-content-center align-item-center">
          <div className='text-center text-white'>
          <span className="loader"></span>
          </div>
        </div>
      </div>)}
    </div>
    <div className="row g-3 ">



      {all?.filter((all)=>all.thumbnail !==null).slice(0,visibale).map((item,index)=>    
      <div key={index} className="col-xl-3 col-md-6">
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
      <div className='m-auto d-flex py-4'>
          <button onClick={showMorePages} className='btn btn-outline-secondary btn-dark m-auto' >Load more</button>

          </div>
    </div>

  </div>
    </>

    )
}
