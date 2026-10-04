import React from 'react'
import { useSelector } from 'react-redux'
import MovieCategory from './MovieCategory'

const SecondaryComponent = () => {
  const moviesCategory = useSelector(store => store.movies.moviesCategory)
  if(!moviesCategory) return null
  console.log(moviesCategory,'moviesCategory')
  return (
    <div className='bg-black'>
     { moviesCategory?.map(category =>

       (
        <div className='-pt-10'>
          <MovieCategory title={category?.title} movies={category?.movies} />
        </div>
       )

       )}
    </div>
    
  )
}

export default SecondaryComponent
