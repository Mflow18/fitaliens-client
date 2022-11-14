import React, { useState } from "react";
import "./FitList.scss";
import FitCard, { TFitCard } from "../../Generic/FitCard/FitCard";

export type TFitList = {
  list: TFitCard[];
};

const FitList: React.FC<TFitList> = ({ list }: TFitList) => {
  return (
    <>
      <div className="fitList-container">
        {list.map((card, i) => {
          return (
            <FitCard
              name={card.name}
              description={card.description}
              imageUrl={card.imageUrl}
              key={`FitCard-${i}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default FitList;
