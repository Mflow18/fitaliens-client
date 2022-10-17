import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ExerciseList from "./ExerciseList";

const ExerciseListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/exercises")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return <>{data ? <ExerciseList list={data} /> : <CircularProgress />}</>;
};

export default ExerciseListContainer;
