import { Badge } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const CriticScoreBadge = ({ game }: Props) => {
  let color =
    game.metacritic >= 90 ? "green" : game.metacritic >= 75 ? "yellow" : "red";

  return (
    <Badge fontSize="14px" colorScheme={color} borderRadius="4px">
      {game.metacritic}
    </Badge>
  );
};

export default CriticScoreBadge;
