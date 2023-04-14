import React, { useCallback, useState } from "react";
import { Button, TextField } from "@material-ui/core";

import FitModal from "../../Generic/FitModal/FitModal";
import "./CategoryFormModal.scss";

interface ICategoryFormModal {
  readonly isOpen: boolean;
  readonly handleCloseAction: () => void;
  readonly handleSubmit: (name: string) => void;
}

export default function CategoryFormModal({
  isOpen,
  handleCloseAction,
  handleSubmit,
}: ICategoryFormModal): React.ReactElement<ICategoryFormModal> {
  const [nameValue, setNameValue] = useState("");

  const handleName = useCallback(
    (event: Readonly<{ target: { value: React.SetStateAction<string> } }>) => {
      setNameValue(event.target.value);
    },
    []
  );

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
            onChange={handleName}
            value={nameValue}
            variant="outlined"
          />
        </div>
        <div className="categoryFormModal-footer">
          <Button onClick={handleCloseAction}>Cancel</Button>
          <Button onClick={submit}>Submit</Button>
        </div>
      </>
    </FitModal>
  );
}
