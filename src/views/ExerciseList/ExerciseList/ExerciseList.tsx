import React, { useState } from "react";
import "./ExerciseList.scss";
import { TExerciseList } from "./types";
import { Button } from "@mui/material";
import ExerciseFormModal from "../ExerciseFormModal/ExerciseFormModal";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

const ExerciseList: React.FC<TExerciseList> = ({
  list,
  addExerciseAction,
  deleteExerciseAction,
}: TExerciseList) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="exerciseList-container">
        <div className="list-grid">
          {list.map((exercise, i) => {
            return (
              <ExerciseCard
                key={`exerciseCard-${i}`}
                exercise={exercise}
                deleteAction={deleteExerciseAction}
              />
            );
          })}{" "}
        </div>
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
