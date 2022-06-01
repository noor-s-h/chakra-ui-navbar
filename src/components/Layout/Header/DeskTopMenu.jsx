import {
  Button,
  ListItem,
  Popover,
  Icon,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

import NavLink from "./NavLink";
import DropDown from "./DropDown";

export default function DeskTopMenu({ label, href, childrens }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ListItem>
      {childrens ? (
        <Popover
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          trigger="hover"
          gutter={0}
        >
          <PopoverTrigger>
            <Button p="1rem" variant="link">
              {label}
              <Icon as={ChevronDownIcon} w={5} h={5} ml={1} />
            </Button>
          </PopoverTrigger>
          <PopoverContent width="inherit" minW="10rem" bg="white">
            <DropDown closeNav={onClose} childrens={childrens} />
          </PopoverContent>
        </Popover>
      ) : (
        <NavLink href={href}>{label}</NavLink>
      )}
    </ListItem>
  );
}
