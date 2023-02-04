import { View } from "native-base"
import { useEffect, useState } from 'react'
import { getMoviesResults } from '../services/api'
import Movies from "../filters/Movies"
import MoviesList from "../lists/MoviesList"

const MoviesContainer = ({ navigation }) => {
    const [filterType, setFilterType] = useState('popular')
    const [movieResults, setMovieResults] = useState([])

    useEffect(() => {
        fetchMovies()
    }, [filterType])

    const fetchMovies = () => {

        getMoviesResults(filterType).then(
            (movieResults) => {
                setMovieResults(movieResults)
            }
        )
    }

    const selectChange = filterType => (
        setFilterType(filterType)
    )


    return(
    <View>
        <Movies onSelectChange={selectChange} getMoviesResults={fetchMovies} />
        <MoviesList movieResults={movieResults} navigation={navigation}/>
    </View>
    )
}

export default MoviesContainer