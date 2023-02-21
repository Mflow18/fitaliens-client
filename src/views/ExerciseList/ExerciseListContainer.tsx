import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ExerciseList from "./ExerciseList/ExerciseList";
import axios from "axios";
import useFetch from "../../helpers/useFetch";
import { TExercise } from "./ExerciseList/types";

const ExerciseListContainer = () => {
  const { data } = useFetch<{ data: TExercise[] }>("/exercises");

  const addExercise = (name: string, categories: string) => {
    axios.post("/exercises", { name: name, categories: categories });
  };

  const deleteExercise = (name: string) => {
    axios.delete("/exercises", { data: { name: name } });
  };

  return (
    <>
      {data ? (
        <ExerciseList
          list={data.data}
          addExerciseAction={addExercise}
          deleteExerciseAction={deleteExercise}
        />
      ) : (
        <div className="circular-progress">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default ExerciseListContainer;
