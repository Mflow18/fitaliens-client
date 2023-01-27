import { TFitCard } from "../../Generic/FitCard/FitCard";

export type TCategoriesList = {
  list: TFitCard[];
  addCategoryAction: (name: string) => void;
  deleteCategoryAction: (name: string) => void;
};
