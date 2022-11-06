import React, { useState } from "react";
import "./ExerciseList.scss";
import FitCard from "../../Generic/FitCard/FitCard";
import { TExerciseList } from "./ExerciseList.types";
import { Button } from "@mui/material";
import ExerciseFormModal from "../ExerciseFormModal/ExerciseFormModal";

const ExerciseList: React.FC<TExerciseList> = ({
  list,
  addExerciseAction,
}: TExerciseList) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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
        <Button onClick={() => setModalOpen(true)}>Add an exercise</Button>
      </div>
      <ExerciseFormModal
        isOpen={modalOpen}
        handleCloseAction={() => setModalOpen(false)}
        handleSubmit={addExerciseAction}
      />
    </>
  );
};

export default ExerciseList;
