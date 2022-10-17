import React from "react";
import { Card, CardContent } from "@material-ui/core";

export type TFitCard = {
  name: string;
  description: string;
  imageUrl: string;
};

const FitCard: React.FC<TFitCard> = ({
  name,
  description,
  imageUrl,
}: TFitCard) => {
  return (
    <Card>
      <CardContent>{name}</CardContent>
      <CardContent>{description}</CardContent>
      <CardContent>{imageUrl}</CardContent>
    </Card>
  );
};

export default FitCard;
