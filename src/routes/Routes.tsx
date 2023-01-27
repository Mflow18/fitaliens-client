import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../views/Layout/Layout";
import ExerciseListContainer from "../views/ExerciseList/ExerciseListContainer";
import CategoriesContainer from "../views/Categories/CategoriesContainer";
import DashboardContainer from "../views/Dashboard/DashboardContainer";

const RoutesComponent: React.FC<any> = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout children={<DashboardContainer />} />}
        />
        <Route
          path="/exercises"
          element={<Layout children={<ExerciseListContainer />} />}
        />
        <Route
          path="/categories"
          element={<Layout children={<CategoriesContainer />} />}
        />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
