import { Center, HStack, Heading, Spinner } from 'native-base'

const Loading = () => (
    <Center>
        <HStack>
            <Spinner accessibilityLabel='Loading results'/>
            <Heading px="20">Loading</Heading>
        </HStack>
    </Center>
)

export default Loading