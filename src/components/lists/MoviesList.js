import { useState, useEffect } from 'react'
import Card from "../card/Card"
import {FlatList} from "native-base"


const MoviesList = ({ navigation, movieResults }) => {
    const [imagePath, setImagePath] = useState("")
    useEffect(() => {
        setImagePath("https://image.tmdb.org/t/p/w500")
    }, [movieResults])
 

    return(

        <FlatList
        data={movieResults}
        renderItem={({ item }) => (
          <Card
            poster={`${imagePath}${item.poster_path}`}
            title={item.title}
            overview={item.overview}
            popularity={item.popularity}
            release_date={item.release_date}
            navigation={navigation}
            id={item.id}
          />
        )}
      />
    )

}

export default MoviesList