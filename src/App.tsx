import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";

function App() {
  return (
    // <Grid templateAreas={`"nav nav" "sidebar main"`}>
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
    >
      <GridItem area="nav" padding="10px">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="sidebar" bg="dodgerblue">
          Sidebar
        </GridItem>
      </Show>
      <GridItem area="main" bg="coral">
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
