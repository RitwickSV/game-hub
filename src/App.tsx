import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    // <Grid templateAreas={`"nav nav" "sidebar main"`}>
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
    >
      <GridItem area="nav" bg="papayawhip">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="sidebar" bg="dodgerblue">
          Sidebar
        </GridItem>
      </Show>
      <GridItem area="main" bg="coral">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
