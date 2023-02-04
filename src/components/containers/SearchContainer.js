import { View } from "native-base"
import { useState, useEffect } from "react"
import Search from '../filters/Search'
import SearchList from '../lists/SearchList'
import { getSearchResults } from "../services/api"


const SearchContainer = ({ navigation }) => {
    const [searchResults, setSearchResults] = useState([])
    const [search, setSearch] = useState('')
    const [filterType, setFilterType] = useState('')

    useEffect(() => {
        fetchSearch()
    }, [filterType])

    const fetchSearch = () => {

        getSearchResults(filterType, search).then(
            (searchResults) => {
                setSearchResults(searchResults)
            }

        )
    }

    const InputChange = search => (
        setSearch(search)
    )

    const SelectChange = filterType => {
        setFilterType(filterType)
    }


    return(
        <View>
            <Search onInputChange={InputChange} onSelectChange={SelectChange} getSearchResults={fetchSearch} />
            <SearchList searchResults={searchResults} navigation={navigation}/>
        </View>
    )
}

export default SearchContainer