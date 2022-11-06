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
    console.log("action");
    axios.post("/exercises", { name }).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      {data ? (
        <ExerciseList list={data} addExerciseAction={addExercise} />
      ) : (
        <div className="circular-progress">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default ExerciseListContainer;
