import React from "react";
import { Card, CardContent, CardHeader, IconButton } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";

export type TFitCard = {
  name: string;
  description?: string;
  imageUrl?: string;
  deleteAction?: (arg: any) => void;
};

const FitCard: React.FC<TFitCard> = ({
  name,
  description,
  imageUrl,
  deleteAction,
}: TFitCard) => {
  return (
    <Card>
      <CardHeader
        action={
          deleteAction && (
            <IconButton
              onClick={() => deleteAction(name)}
              aria-label="settings"
            >
              <DeleteIcon />
            </IconButton>
          )
        }
        title={name}
      ></CardHeader>
      <CardContent>{description}</CardContent>
      <CardContent>{imageUrl}</CardContent>
    </Card>
  );
};

export default FitCard;
