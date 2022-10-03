import React from "react";
import "./WorkoutList.scss";
import WorkoutCard from "./WorkoutCard/WorkoutCard";
import { TWorkoutList } from "./WorkoutList.types";

const WorkoutList: React.FC<TWorkoutList> = ({ list }: TWorkoutList) => {
  return (
    <>
      <div className="workoutlist-container">
        {list.map((card, i) => {
          return <WorkoutCard name={card.name} key={`workoutCard-${i}`} />;
        })}
      </div>
    </>
  );
};

export default WorkoutList;
