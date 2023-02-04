import { useState, useEffect } from 'react'
import Card from "../card/Card"
import {FlatList} from "native-base"


const TvShowsList = ({ navigation, tvShowsResults }) => {
    const [imagePath, setImagePath] = useState("")
    useEffect(() => {
        setImagePath("https://image.tmdb.org/t/p/w500")
    }, [tvShowsResults])
    return(
        <FlatList 
            data={tvShowsResults}
            renderItem={({ item }) => (
                <Card
                    poster={`${imagePath}${item.poster_path}`}
                    title={item.name}
                    overview={item.overview}
                    popularity={item.popularity}
                    release_date={item.first_air_date}
                    navigation={navigation}
                    id={item.id}
                    type="tv_shows"
                />
            )}
        />
    )

}

export default TvShowsList