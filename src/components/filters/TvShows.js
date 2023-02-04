import { Select, VStack, CheckIcon } from "native-base"
import { useState } from "react"

const TvShows = props => {
    const { getTvShowsResults, onSelectChange } = props
    const [tvShowsType, setTvShowsType] = useState("popular")

    return (
        <VStack alignItems='center' space={2} py={5}>
            <Select 
                selectedValue={tvShowsType} 
                minWidth={200} 
                accessibilityLabel="Select TvShows"
                placeholder="Select"
                defaultValue="popular"
                onValueChange={tvShowsTypeValue => {
                    onSelectChange(tvShowsTypeValue)
                    setTvShowsType(tvShowsTypeValue)
                    getTvShowsResults(tvShowsTypeValue)
                }}
                _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size='5' />,
                }}
                mt={1}
            >
                <Select.Item label="Popular" value="popular"/>
                <Select.Item label="Airing today" value="airing_today"/>
                <Select.Item label="On the air" value="on_the_air"/>
                <Select.Item label="Top rated" value="top_rated"/>
            </Select>
        </VStack>
    )
}

export default TvShows