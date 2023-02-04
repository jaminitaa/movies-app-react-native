import { View } from "native-base"
import { useState, useEffect } from 'react'
import { getTvShowsResults } from '../services/api'
import TvShows from "../filters/TvShows"
import TvShowsList from '../lists/TvShowsList'



const TvShowsContainer = ({ navigation }) => {
    const [filterType, setFilterType] = useState('popular')
    const [tvShowsResults, settvShowsResults] = useState([])

    useEffect(() => {
        fetchShows()
    }, [filterType])

    const fetchShows = () => {

        getTvShowsResults(filterType).then(
            (tvShowsResults) => {
                settvShowsResults(tvShowsResults)
            }
        )
    }

    const handleSelectChange = filterType => (
        setFilterType(filterType)
    )

    return(
    <View>
        <TvShows onSelectChange={handleSelectChange} getTvShowsResults={fetchShows}/>
        <TvShowsList tvShowsResults={tvShowsResults} navigation={navigation}/>
    </View>
    )
}

export default TvShowsContainer