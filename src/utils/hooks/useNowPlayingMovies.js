import { useDispatch } from "react-redux"
import { movies } from "../movies"
import { addNowPlayingMovies } from "../moviesSlice"


const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const list = movies
    dispatch(addNowPlayingMovies(list))
}

export default useNowPlayingMovies