import React, { useState } from "react";
import "./CategoriesList.scss";
import { TCategoriesList } from "./types";
import { Button } from "@mui/material";
import CategoryFormModal from "../CategoryFormModal/CategoryFormModal";
import FitCard from "../../Generic/FitCard/FitCard";

const CategoriesList: React.FC<TCategoriesList> = ({
  list,
  addCategoryAction,
  deleteCategoryAction,
}: TCategoriesList) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="categoriesList-container">
        <div className="list-grid">
          {list.map((card, i) => {
            return (
              <FitCard
                name={card.name}
                description={card.description}
                imageUrl={card.imageUrl}
                key={`FitCard-${i}`}
                deleteAction={deleteCategoryAction}
              />
            );
          })}
        </div>
        <Button onClick={() => setModalOpen(true)}>Add a Category</Button>
      </div>
      <CategoryFormModal
        isOpen={modalOpen}
        handleCloseAction={() => setModalOpen(false)}
        handleSubmit={addCategoryAction}
      />
    </>
  );
};

export default CategoriesList;
