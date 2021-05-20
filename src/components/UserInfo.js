import { Button, HStack, Text, Heading } from "@chakra-ui/react";
import React from "react";

import {useAuth} from '../contexts/AuthContext'
import { useColors } from "../contexts/ColorsContext";
// import { Container } from './styles';

function UserInfo() {
   const {user, signOutUser} = useAuth()
   
   const {primaryColor, textColor} = useColors()

   return (
      <>
         <HStack bg={primaryColor} color={textColor} p="15px" borderRadius="5px" align="center" pos="absolute" top="50px"right="50px">
            <Text >
               Logged in as
            </Text>
            <Heading size="sm">
               {user?.email}
            </Heading>
         </HStack>
         <Button
            onClick={signOutUser}
            bg={primaryColor}
            color={textColor}
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
