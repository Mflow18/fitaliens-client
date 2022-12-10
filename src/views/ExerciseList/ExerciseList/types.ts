import { TFitCard } from "../../Generic/FitCard/FitCard";

export type TExerciseList = {
  list: TFitCard[];
  addExerciseAction: (name: string) => void;
  deleteExerciseAction: (name: string) => void;
};
