import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/controller.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack margin={3}>
      <Link to={"/"}>
        <Image src={logo} boxSize="50px" />
      </Link>
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
