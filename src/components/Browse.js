import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { movieCategories } from '../utils/movies'
import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies'
import MainComponent from './MainComponent'
import SecondaryComponent from './SecondaryComponent'
import useMoviesCategory from '../utils/hooks/useMoviesCategory'

const Browse = () => {
  useNowPlayingMovies();
  useMoviesCategory();
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <MainComponent />
        <SecondaryComponent />
      </div>
    </div>
  )
}

export default Browse
