import { useState } from 'react'
import { VStack, FormControl, HStack, Center, Icon, Input, Select, CheckIcon, Button, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

const Search = props => {
    const { getSearchResults, onInputChange, onSelectChange } = props
    const [searchData, setSearchData] = useState({})
    const [searchType, setSearchType] = useState("")

    const onSubmit = () => {
        getSearchResults(searchType, searchData)
    }

    return (
        <VStack  >
            <FormControl isRequired px='4' pt='2' pb='3' width='100%'>
                <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
                <Input
                    placeholder='ie. James Bond, CSI'
                    bg='gray.200'
                    InputLeftElement={
                        <Icon size='4' ml='2' color='gray.400' as={<Ionicons name='ios-search'/>}/>
                    }
                    onChangeText={value => {
                        onInputChange(value)
                        setSearchData(value)
                    }}
                />
                <FormControl.Label>Choose Search Type</FormControl.Label>
                <HStack
                    alignItems='center'
                    justifyItems='center'
                >
                    <Select
                        selectedValue={searchType} 
                        minWidth="200"
                        mr="5"
                        accessibilityLabel="Select Search Type"
                        placeholder="Select"
                        onValueChange={searchTypeValue => {
                            onSelectChange(searchTypeValue)
                            setSearchType(searchTypeValue)
                            
                        }}
                        _selectedItem={{
                            bg: "#teal.600",
                            endIcon: <CheckIcon size='5' />,
                        }}
                    >
                        <Select.Item label="Movie" value="movie"/>
                        <Select.Item label="Multi" value="multi"/>
                        <Select.Item label="Tv" value="tv"/>
                    </Select>
                    <Button
                        onPress={onSubmit}
                        startIcon={<Icon as={Ionicons} name='ios-search' />}
                        px="4" py="2"
                        >
                    Search
                    </Button>
                </HStack>
                <HStack
                    alignItems='center'
                    justifyItems='center'
                >
                    <Center >
                    <Text style={{fontSize:22, fontWeight:'bold'}} mt="18">Please initiate a search</Text>
                    </Center>
                </HStack>
            </FormControl>
        </VStack>
    )
}

export default Search