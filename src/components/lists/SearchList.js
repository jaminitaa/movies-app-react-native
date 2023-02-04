import { useState, useEffect } from 'react'
import { FlatList } from "native-base"
import Card from "../card/Card"


const SearchList = ({ navigation, searchResults }) => {
    const [imagePath, setImagePath] = useState("")
    useEffect(() => {
        setImagePath("https://image.tmdb.org/t/p/w500")
    }, [searchResults])

    return(
        <FlatList 
        data={searchResults}
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

export default SearchList