import { Button } from "@chakra-ui/react";
import React from "react";

import {useAuth} from '../contexts/AuthContext'
// import { Container } from './styles';

function UserInfo() {
    const {signOutUser} = useAuth()

   return (
      <Button
         top="50px"
         right="50px"
         position="fixed"
         onClick={signOutUser}
         bg={"blue.700"}
         color={"white"}
         _hover={{
            bg: "blue.600",
         }}
      >
        Sign Out
      </Button>
   );
}

export default UserInfo;
