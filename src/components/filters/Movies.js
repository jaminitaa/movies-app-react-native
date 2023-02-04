// import { Select, VStack, CheckIcon } from "native-base"
import { Select, Box, CheckIcon, Center } from "native-base";
import { useState } from "react"

const Movies = props => {
    const { getMoviesResults, onSelectChange } = props
    const [movieType, setMovieType] = useState("popular")

    return (
        <Center>
        <Box maxW="300">
          <Select
            selectedValue={movieType} 
            minWidth={200} 
            accessibilityLabel="Select Movies"
            placeholder="Select"
            defaultValue="popular"
            onValueChange={movieTypeValue => {
                onSelectChange(movieTypeValue)
                setMovieType(movieTypeValue)
                getMoviesResults(movieTypeValue)
            }}
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={5}
            mb={5}
          >
            <Select.Item label="Now playing" value="now_playing" />
            <Select.Item label="Popular" value="popular" />
            <Select.Item label="Top rated" value="top_rated" />
            <Select.Item label="Upcoming" value="upcoming" />
          </Select>
        </Box>
      </Center>
    )
}

export default Movies