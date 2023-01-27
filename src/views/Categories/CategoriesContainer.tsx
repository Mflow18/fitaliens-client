import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CategoriesList from "./CategoriesList/CategoriesList";
import axios from "axios";

const CategoriesListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/categories")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  const addCategory = (name: string) => {
    axios
      .post("/categories", { name: name })
      .then((res) => setData(res.data.data));
  };

  const deleteCategory = (name: string) => {
    axios
      .delete("/categories", { data: { name: name } })
      .then((res) => setData(res.data.data));
  };

  return (
    <>
      {data ? (
        <CategoriesList
          list={data}
          addCategoryAction={addCategory}
          deleteCategoryAction={deleteCategory}
        />
      ) : (
        <div className="circular-progress">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default CategoriesListContainer;
