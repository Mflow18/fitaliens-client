import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { TWorkoutCard } from "../WorkoutList.types";

const WorkoutCard: React.FC<TWorkoutCard> = ({ name }: TWorkoutCard) => {
  return (
    <Card>
      <CardContent>{name}</CardContent>
    </Card>
  );
};

export default WorkoutCard;
