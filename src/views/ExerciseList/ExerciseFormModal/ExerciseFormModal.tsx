import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import FitModal from "../../Generic/FitModal/FitModal";
import "./ExerciseFormModal.scss";

type TExerciseFormModal = {
  isOpen: boolean;
  handleCloseAction: () => void;
  handleSubmit: (name: string) => void;
};

const ExerciseFormModal: React.FC<TExerciseFormModal> = ({
  isOpen,
  handleCloseAction,
  handleSubmit,
}: TExerciseFormModal) => {
  const [nameValue, setNameValue] = useState("");

  const handleName = (e: any) => {
    setNameValue(e.target.value);
  };

  const submit = () => {
    handleSubmit(nameValue);
    setNameValue("");
    handleCloseAction();
  };

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
            value={nameValue}
            onChange={handleName}
          />
        </div>
        <div className="exerciseFormModal-footer">
          <Button onClick={() => handleCloseAction()}>Cancel</Button>
          <Button onClick={() => submit()}>Submit</Button>
        </div>
      </>
    </FitModal>
  );
};

export default ExerciseFormModal;
