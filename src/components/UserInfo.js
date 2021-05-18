import { Button, VStack, HStack,Text, Heading, Flex } from "@chakra-ui/react";
import React from "react";

import {useAuth} from '../contexts/AuthContext'
// import { Container } from './styles';

function UserInfo() {
    const {user, signOutUser} = useAuth()

   return (
      <>
         <HStack bg={"blue.700"} p="15px" borderRadius="5px" align="center" pos="absolute" top="50px"right="50px">
            <Heading size="sm">
               Logged in as:
            </Heading>
            <Text>
               {user?.email}
            </Text>
         </HStack>
         <Button
            onClick={signOutUser}
            bg={"blue.700"}
            color={"white"}
            _hover={{
               bg: "blue.600",
            }}
            pos="absolute"
            top="120px"
            right="50px"
            >
               Sign Out
         </Button>
      </>
     
      
   );
}

export default UserInfo;
