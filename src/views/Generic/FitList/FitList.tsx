import React from "react";
import "./FitList.scss";
import FitCard, { TFitCard } from "../../Generic/FitCard/FitCard";

export type TFitList = {
  list: TFitCard[];
  deleteAction?: (arg: any) => void;
};

const FitList: React.FC<TFitList> = ({ list, deleteAction }: TFitList) => {
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
              deleteAction={deleteAction}
            />
          );
        })}
      </div>
    </>
  );
};

export default FitList;
