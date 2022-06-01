import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function NavLink({ children, href, closeNav, ...rest }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <NextLink href={href} passHref>
      <Link
        display="block"
        px={{ base: "0", md: "1rem" }}
        py=".5rem"
        onClick={closeNav}
        color={isActive ? "gray.600" : "gray.500"}
        {...rest}
      >
        {children}
      </Link>
    </NextLink>
  );
}
