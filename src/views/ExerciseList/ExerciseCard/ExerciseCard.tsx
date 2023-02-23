import React from "react";
import { Card, CardContent, CardHeader, IconButton } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { TExercise } from "../ExerciseList/types";

export type TExerciseCard = {
  exercise: TExercise;
  deleteAction?: (arg: any) => void;
};

const ExerciseCard: React.FC<TExerciseCard> = ({
  exercise,
  deleteAction,
}: TExerciseCard) => {
  const { name, categories } = exercise;
  return (
    <Card>
      <CardHeader
        action={
          deleteAction && (
            <IconButton
              onClick={() => deleteAction(name)}
              aria-label="settings"
            >
              <DeleteIcon />
            </IconButton>
          )
        }
        title={name}
      />
      <CardContent>
        <h3>Categories</h3>
        {categories.map((cat) => {
          return <p key={`${cat.name}`}>{cat.name}</p>;
        })}
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;
