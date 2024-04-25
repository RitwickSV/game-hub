import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GamesGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4 }}
        spacing="10px"
        padding="10px"
      >
        {error && <Text>{error}</Text>}
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
