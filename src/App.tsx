import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformList from "./components/PlatformList";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    // <Grid templateAreas={`"nav nav" "sidebar main"`}>
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="nav" padding="10px">
        <NavBar />
      </GridItem>
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
}

export default App;
