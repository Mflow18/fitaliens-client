import React from "react";
import { TCategoriesList } from "./types";
import FitList from "../Generic/FitList/FitList";

const CategoriesList: React.FC<TCategoriesList> = ({
  list,
}: TCategoriesList) => {
  return <FitList list={list} />;
};

export default CategoriesList;
