import React, { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import FitModal from "../../Generic/FitModal/FitModal";
import "./ExerciseFormModal.scss";
import FitSelect from "../../Generic/FitDropdown/FitSelect";
import { TCategoryData } from "../../Categories/types";

type TExerciseFormModal = {
  isOpen: boolean;
  handleCloseAction: () => void;
  handleSubmit: (name: string, categoryValue: string) => void;
};

const ExerciseFormModal: React.FC<TExerciseFormModal> = ({
  isOpen,
  handleCloseAction,
  handleSubmit,
}: TExerciseFormModal) => {
  const [nameValue, setNameValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [categoriesList, setCategoriesList] = useState<string[] | undefined>(
    undefined
  );

  const prepareCategoriesList = (data: TCategoryData[]) => {
    const formattedArray = data.map((cat) => {
      return cat.name;
    });
    setCategoriesList(formattedArray);
  };

  useEffect(() => {
    fetch("/categories")
      .then((res) => res.json())
      .then((data) => prepareCategoriesList(data.data));
  }, []);

  const handleName = (e: any) => {
    setNameValue(e.target.value);
  };

  const submit = () => {
    handleSubmit(nameValue, categoryValue);
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
          <FitSelect
            title={"Category"}
            currentValue={categoryValue}
            changeAction={(value) => {
              setCategoryValue(value);
            }}
            options={categoriesList ? categoriesList : []}
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
