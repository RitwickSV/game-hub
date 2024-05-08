import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GamesGrid from "../components/GamesGrid";
import GenreList from "../components/GenreList";
import PlatformList from "../components/PlatformList";
import SortSelector from "../components/SortSelector";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"sidebar main"`,
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="sidebar" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack paddingX={2} marginBottom={2}>
          <PlatformList />
          <SortSelector />
        </HStack>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
