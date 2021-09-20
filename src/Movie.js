
import React from 'react'
 import {useState, useEffect} from 'react';
import './Movie.css';
function Movie() {

 const [movieInfo, setmovieInfo] = useState(null)
const [title, settitle] = useState('the avengers')
useEffect(() => {
   getMovieInfo()

}, [])  

function getMovieInfo() {
    let url = `https://omdbapi.com/?t=${title}&apikey=784a9d41`

    fetch(url)
    .then(response=>response.json())
    .then(data=>setmovieInfo(data))
   
  
}

function newTitle(value) {
    settitle(value)
}

return (
    <div>
           <div className="container">
            <section className="heading-section">
                <h1>
                    Movie Search
                </h1>
            </section>
            <section className="search-section">
               <input type="text" placeholder="Enter" className="input" onChange={(event)=>{newTitle( event.target.value)}}/>
               <button className="search-btn" onClick={getMovieInfo}>Search</button>
            </section>
            <section className="movie-info-section">
{movieInfo?.Error===undefined?

              (<div className="movie-info-container">
                   <div className="img-container">
                    <img src={movieInfo?.Poster} alt="poster"/>
                   </div>
                   <div className="movie-details-container">
                       <h1>{movieInfo?.Title}</h1>
                   <p><strong> Genre : </strong>{movieInfo?.Genre}</p>
                   <p><strong> Directed By : </strong>{movieInfo?.Director}</p>
                   <p><strong> Plot : </strong>{movieInfo?.Plot}</p>
                   <p><strong> Actors : </strong>{movieInfo?.Actors}</p>
                   <p><strong> Box Office : </strong>{movieInfo?.BoxOffice}</p>
                   <p><strong> Language : </strong>{movieInfo?.Language}</p>
                   <p><strong> Released : </strong>{movieInfo?.Released}</p>
                   <p><strong> Runtime : </strong>{movieInfo?.Runtime}</p>
                   

                   <div className="ratings">
                       {
                           movieInfo?.Ratings.map((rating,index)=>(


                            <div>
                               <strong> {rating.Source}</strong>
                               <h3> {rating.Value}</h3>
                            </div>
                           )

                           )

                           
                               

                           
                       }
                   </div>
                   </div>
               </div>):(<div className="error"><p>Sorry! We dont have this in our database</p></div>)}
            </section>
                 
            
        </div>
        </div>
    )
}

export default Movie

