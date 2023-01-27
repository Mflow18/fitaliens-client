import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import FitModal from "../../Generic/FitModal/FitModal";
import "./CategoryFormModal.scss";

type TCategoryFormModal = {
  isOpen: boolean;
  handleCloseAction: () => void;
  handleSubmit: (name: string) => void;
};

const CategoryFormModal: React.FC<TCategoryFormModal> = ({
  isOpen,
  handleCloseAction,
  handleSubmit,
}: TCategoryFormModal) => {
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
        <div className="categoryFormModal-header">
          <h4>Add an Category</h4>
        </div>
        <div className="categoryFormModal-body">
          <TextField
            id="outlined-basic"
            label="Category name"
            variant="outlined"
            value={nameValue}
            onChange={handleName}
          />
        </div>
        <div className="categoryFormModal-footer">
          <Button onClick={() => handleCloseAction()}>Cancel</Button>
          <Button onClick={() => submit()}>Submit</Button>
        </div>
      </>
    </FitModal>
  );
};

export default CategoryFormModal;
