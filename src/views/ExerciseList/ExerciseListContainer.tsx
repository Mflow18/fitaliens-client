import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ExerciseList from "./ExerciseList/ExerciseList";
import axios from "axios";

const ExerciseListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/exercises")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  const addExercise = (name: string) => {
    axios
      .post("/exercises", { name: name })
      .then((res) => setData(res.data.data));
  };

  const deleteExercise = (name: string) => {
    axios
      .delete("/exercises", { data: { name: name } })
      .then((res) => setData(res.data.data));
  };

  return (
    <>
      {data ? (
        <ExerciseList
          list={data}
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
