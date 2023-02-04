import { Box, HStack, Text, Image, VStack, Button } from "native-base";

const Card = props => {
  const {  poster, title, popularity, release_date, overview, navigation, id, type } = props;

  return (
    <>
      <Box ml="4" mr="4" mb="4">
        <HStack space="2" alignItems="center">
          <Image
            source={{ uri: poster }}
            alt="Poster"
            size="xl"
            width="30%"
          />

          <VStack space="2" px="3" width="70%">
            <Box>
              <Text fontWeight="bold">{title}</Text>
              <Text>Popularity: {popularity}</Text>
              <Text>Release Date: {release_date}</Text>
            </Box>

            <Button
              size="md"
              borderRadius="4"
              variant="solid"
              width={200}
              onPress={() => {
                navigation.navigate('View Details',{
                    title, popularity, overview, poster, release_date, id, type} );
              }}
            >
              More Details
            </Button>
          </VStack>
        </HStack>
      </Box>
    </>
  );
}

export default Card