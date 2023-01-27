import React, { useState } from "react";
import "./CategoriesList.scss";
import { TCategoriesList } from "./types";
import { Button } from "@mui/material";
import CategoryFormModal from "../CategoryFormModal/CategoryFormModal";
import FitList from "../../Generic/FitList/FitList";

const CategoryList: React.FC<TCategoriesList> = ({
  list,
  addCategoryAction,
  deleteCategoryAction,
}: TCategoriesList) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="categoryList-container">
        <FitList list={list} deleteAction={deleteCategoryAction} />
        <Button onClick={() => setModalOpen(true)}>Add an Category</Button>
      </div>
      <CategoryFormModal
        isOpen={modalOpen}
        handleCloseAction={() => setModalOpen(false)}
        handleSubmit={addCategoryAction}
      />
    </>
  );
};

export default CategoryList;
