import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ExerciseList from "./ExerciseList/ExerciseList";
import axios from "axios";
import useFetch from "../../helpers/useFetch";
import { TExercise } from "./ExerciseList/types";

const ExerciseListContainer = () => {
  const { state, refetch } = useFetch<{ data: TExercise[] }>("/exercises");

  const addExercise = (name: string, categories: string) => {
    axios.post("/exercises", { name: name, categories: categories });
    refetch({});
  };

  const deleteExercise = (name: string) => {
    axios.delete("/exercises", { data: { name: name } });
    refetch({});
  };

  return (
    <>
      {state.data ? (
        <ExerciseList
          list={state.data.data}
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
