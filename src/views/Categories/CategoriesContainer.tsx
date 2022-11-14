import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CategoriesList from "./CategoriesList";

const CategoriesContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/exercises")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <>
      {data ? (
        <CategoriesList list={data} />
      ) : (
        <div className="circular-progress">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default CategoriesContainer;
