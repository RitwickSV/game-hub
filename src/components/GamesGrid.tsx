import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";

const GamesGrid = () => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <Box padding="10px">
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={3}>
          {/* {error && <Text>{error}</Text>} */}
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}

          {isLoading ||
            data?.pages.map((page, index) => (
              <React.Fragment>
                {page.results.map((game) => (
                  <GameCardContainer key={index}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
              </React.Fragment>
            ))}
        </SimpleGrid>
        {hasNextPage && (
          <Button marginY={4} onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        )}
      </Box>
    </>
  );
};

export default GamesGrid;
