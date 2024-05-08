import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/controller.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <HStack margin={3}>
      <Image src={logo} boxSize="50px" />
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
