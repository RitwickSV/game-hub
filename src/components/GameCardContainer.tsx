import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      overflow="hidden"
      borderRadius={10}
      _hover={{
        transform: "scale(1.05)",
        transitionDuration: ".35s",
        transitionTimingFunction: "ease-in-out",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
