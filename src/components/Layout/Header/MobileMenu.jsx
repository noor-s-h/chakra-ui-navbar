import {
  Button,
  ListItem,
  Collapse,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

import NavLink from './NavLink';
import DropDown from './DropDown';

export default function MobileMenu({ label, href, childrens, closeNav }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <ListItem>
      {childrens ? (
        <>
          <Button
            w="100%"
            py=".5rem"
            variant="link"
            onClick={onToggle}
          >
            {label}
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
              ml={'auto'}
            />
          </Button>
          <Collapse
            in={isOpen}
            style={{ marginTop: '0' }}
            unmountOnExit
          >
            <DropDown closeNav={closeNav} childrens={childrens} />
          </Collapse>
        </>
      ) : (
        <NavLink href={href} closeNav={closeNav}>
            {label}
        </NavLink>
      )}
    </ListItem>
  );
}
