import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformList from "./components/PlatformList";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformList
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <GamesGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
