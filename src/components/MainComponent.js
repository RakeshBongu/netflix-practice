import React from 'react'
import VideoTitle from './VideoTitle'
import VideoPlayer from './VideoPlayer'
import { useSelector } from 'react-redux'

const MainComponent = () => {
    const movies = useSelector(store => store.movies.nowPlayingMovies)
    const getRandomMovie = (list) => {
       const random = Math.floor(Math.random() * list.length)
       return list[random]
    }
    const movie = getRandomMovie(movies)
    console.log(movie,'ygrfygyfbbrfhb')
    if(!movie) return
  return (
    <div>
      <VideoTitle title={movie?.title} description={movie?.description}/>
      <VideoPlayer trailerKey={movie?.trailerKey}/>
    </div>
  )
}

export default MainComponent
