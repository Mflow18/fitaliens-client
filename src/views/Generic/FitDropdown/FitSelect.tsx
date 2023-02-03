import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

export type TFitSelect = {
  title: string;
  currentValue: string;
  options: string[];
  changeAction: (value: any) => void;
};

const FitSelect: React.FC<TFitSelect> = ({
  title,
  currentValue,
  options,
  changeAction,
}: TFitSelect) => {
  const handleChange = (event: any) => {
    changeAction(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{title}</InputLabel>
      <Select
        labelId="fit-select-label"
        id="fit-select"
        value={currentValue}
        label={title}
        onChange={handleChange}
      >
        {options.map((option) => {
          return <MenuItem value={option}>{option}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default FitSelect;
