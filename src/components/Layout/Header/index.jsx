import {
  Box,
  Container,
  Flex,
  IconButton,
  List,
  useDisclosure,
  Collapse,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import NavData from '../../../data/NavData';
import MobileMenu from './MobileMenu';
import DeskTopMenu from './DeskTopMenu';
import Logo from './Logo';
import AuthBtn from './AuthBtn';

export default function Header() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box
      position={'sticky'}
      top={0}
      zIndex={1}
    >
      <Container maxW={'5xl'}>
        <Flex
          as="nav"
          borderBottom='1px'
          borderColor='gray.200'
          h={{ base: "3rem", md: "4rem" }}
          align="center"
          justify="space-between"
        >
          <IconButton
            ml="-3"
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={
              isOpen ?
                <CloseIcon w={3} h={3} />
                :
                <HamburgerIcon w={5} h={5} />
            }
            variant={'unstyled'}
            aria-label={'Toggle Navigation'}
          />
          <Logo closeNav={onClose} />
          <List
            display={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            {NavData.map((navdata, index) => (
              <DeskTopMenu key={index} {...navdata} />
            ))}
          </List>
          <AuthBtn closeNav={onClose} />
        </Flex>
        <Collapse in={isOpen} unmountOnExit>
          <List
            display={{ base: "flex", md: "none" }}
            flexDirection="column"
            borderBottom="1px"
            borderColor="gray.200"
          >
            {NavData.map((navdata, index) => (
              <MobileMenu key={index} {...navdata} closeNav={onClose} />
            ))}
          </List>
        </Collapse>
      </Container>
    </Box>
  );
}