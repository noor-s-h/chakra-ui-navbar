import NavLink from './NavLink'
import { Flex } from '@chakra-ui/react';

export default function AuthBtn({ closeNav }) {

  return (
    <Flex>
      <NavLink href='/login' closeNav={closeNav}>
        Login
      </NavLink>
      <NavLink
        variant="cute"
        href='#'
        display={{ base: "none", md: "unset" }}
      >
        Signup
      </NavLink>
    </Flex>
  );
}
