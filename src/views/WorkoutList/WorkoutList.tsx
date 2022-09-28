import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import "./WorkoutList.scss";

const WorkoutList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/workouts")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  console.log(data);
  return (
    <>
      <div className="workoutlist-container">
        {data.map((card: any) => {
          return <Card>{card.name}</Card>;
        })}
      </div>
    </>
  );
};

export default WorkoutList;
