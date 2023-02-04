import { Box, Center, Heading, VStack, HStack, Image, Text, View } from "native-base"

const ViewDetailsScreen = ({ navigation, route }) => {

    const {title, overview, poster, popularity, release_date} = route.params
    
    return(
        <View navigation={navigation}>
            <Box margin="10">
              <VStack>
                <Center>
                    <Heading>{title}</Heading>
                    <Image mt="10" source={{ uri: poster}} alt={title} size="2xl"/>                   
                    <Text mt="10" mb="10">{overview}</Text>                
                </Center>
                <HStack>
                     <Text>Popularity: {popularity}</Text>
                     <Text> | </Text>
                     <Text> Release Date: {release_date}</Text>
                </HStack>
              </VStack>
            </Box>
        </View>
    )
}


export default ViewDetailsScreen