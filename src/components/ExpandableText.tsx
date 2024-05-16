import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  let limit = 300;
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <>
      {summary}
      <Button
        size="xs"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
        marginX={2}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </>
  );
};

export default ExpandableText;
