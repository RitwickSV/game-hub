import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScoreBadge from "./CriticScoreBadge";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`games/${game.slug}`}>
      <Card variant="elevated">
        <Image src={getCroppedImageUrl(game.background_image)} />

        <CardBody>
          <Heading fontSize="xl">{game.name}</Heading>
          <HStack justifyContent="space-between" marginX={2}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScoreBadge game={game} />
          </HStack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
