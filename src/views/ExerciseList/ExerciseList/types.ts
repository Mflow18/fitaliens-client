export type TExerciseList = {
  list: TExercise[];
  addExerciseAction: (name: string, categories: string) => void;
  deleteExerciseAction: (name: string) => void;
};

export type TExercise = {
  name: string;
  categories?: string[];
};
