import {
  List,
  ListItem,
} from '@chakra-ui/react'

import NavLink from './NavLink'

export default function DropDown({ childrens, closeNav }) {
  return (
    <>
      <List
        px={{ base: "1rem", md: "0" }}
        borderLeft={{ base: "1px", md: "0" }}
        borderColor='gray.200'
      >
        {childrens.map(({ label, href }, index) => (
          <ListItem key={index}>
            <NavLink href={href} closeNav={closeNav}>
              {label}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </>
  );
}
