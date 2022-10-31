import { Button, TextField } from "@material-ui/core";
import React from "react";
import FitModal from "../../Generic/FitModal/FitModal";
import "./ExerciseFormModal.scss";

type TExerciseFormModal = {
  isOpen: boolean;
  handleCloseAction: () => void;
  handleSubmit: () => void;
};

const ExerciseFormModal: React.FC<TExerciseFormModal> = ({
  isOpen,
  handleCloseAction,
  handleSubmit,
}: TExerciseFormModal) => {
  return (
    <FitModal isOpen={isOpen}>
      <>
        <div className="exerciseFormModal-header">
          <h4>Add an exercise</h4>
        </div>
        <div className="exerciseFormModal-body">
          <TextField
            id="outlined-basic"
            label="Exercise name"
            variant="outlined"
          />
        </div>
        <div className="exerciseFormModal-footer">
          <Button onClick={() => handleCloseAction()}>Cancel</Button>
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </div>
      </>
    </FitModal>
  );
};

export default ExerciseFormModal;
