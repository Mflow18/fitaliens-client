import React, { useState } from "react";
import "./ExerciseList.scss";
import { TExerciseList } from "./types";
import { Button } from "@mui/material";
import ExerciseFormModal from "../ExerciseFormModal/ExerciseFormModal";
import FitList from "../../Generic/FitList/FitList";

const ExerciseList: React.FC<TExerciseList> = ({
  list,
  addExerciseAction,
}: TExerciseList) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="exerciseList-container">
        <FitList list={list} />
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
