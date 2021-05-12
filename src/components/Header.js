import { Box, Heading, Text} from "@chakra-ui/react"

const Header = () => {
    return (
        <Box p='10px 20px' textAlign='center' bgColor='#2C5282' w='100%' borderRadius='5px 5px 0 0' color='#eee'>
            <Heading>Polon Book List</Heading>
            <Text>Currently you have 2 books to get through...</Text>
        </Box>
    );
}
 
export default Header;