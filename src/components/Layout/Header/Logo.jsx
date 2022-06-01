import NavLink from "./NavLink";

export default function Logo({ closeNav }) {
  return (
    <NavLink href="/" closeNav={closeNav} px="0">
      Logo
    </NavLink>
  );
}
