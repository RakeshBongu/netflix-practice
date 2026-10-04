import React from 'react'

const MovieCategory = ({title, movies}) => {
  return (
    <div className='p-4 text-white'>
      <h1 className='py-2 text-xl font-semibold'>{title}</h1>
      <div className='flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
      {
        movies.map(movie => 
          movie.poster_path && 
            (
                <img 
                className='mr-4 w-32 rounded-lg'
                src={movie.poster_path}
                alt='poster'
                />
            )
        )
      }
      </div>
    </div>
  )
}

export default MovieCategory
