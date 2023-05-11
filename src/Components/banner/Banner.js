import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'
function Banner() {
    const [movie, setMovie] = useState([])
    
  useEffect(() => {
      axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{ 
        console.log(response.data) 
        setMovie(response.data.results[2])
      })  
  }, [])  
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie.title ? movie.title: movie.name}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='discription' >{movie ? movie.overview: ""}</h1>
        </div>
        <div className="fade_bottom">
            
        </div>
    </div>
  )
}

export default Banner