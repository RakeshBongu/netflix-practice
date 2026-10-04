import { useDispatch } from "react-redux"
import { movieCategories } from "../movies"
import { addMoviesCategory } from "../moviesSlice"

const useMoviesCategory = () => {
    const dispatch = useDispatch()
    const list = movieCategories
    dispatch(addMoviesCategory(list))
}

export default useMoviesCategory