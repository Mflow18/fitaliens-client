import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../views/Layout/Layout";
import ExerciseListContainer from "../views/ExerciseList/ExerciseListContainer";
import WorkoutListContainer from "../views/WorkoutList/WorkoutListContainer";

const RoutesComponent: React.FC<any> = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout children={<WorkoutListContainer />} />}
        />
        <Route
          path="/exercises"
          element={<Layout children={<ExerciseListContainer />} />}
        />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
