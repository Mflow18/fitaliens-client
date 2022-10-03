import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import WorkoutList from "./WorkoutList";

const WorkoutListContainer = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/workouts")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return <>{data ? <WorkoutList list={data} /> : <CircularProgress />}</>;
};

export default WorkoutListContainer;
