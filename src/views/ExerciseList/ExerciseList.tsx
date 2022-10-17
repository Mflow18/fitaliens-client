import React from "react";
import "./ExerciseList.scss";
import FitCard from "../Generic/FitCard/FitCard";
import { TExerciseList } from "./ExerciseList.types";
import { Button } from "@mui/material";

const ExerciseList: React.FC<TExerciseList> = ({ list }: TExerciseList) => {
  return (
    <>
      <div className="exerciseList-container">
        {list.map((card, i) => {
          return (
            <FitCard
              name={card.name}
              description={card.description}
              imageUrl={card.imageUrl}
              key={`FitCard-${i}`}
            />
          );
        })}
        <Button>Add an exercise</Button>
      </div>
    </>
  );
};

export default ExerciseList;
