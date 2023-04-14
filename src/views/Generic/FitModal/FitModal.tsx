import React from "react";
import { Box, Modal } from "@material-ui/core";
import "./FitModal.scss";

interface IFitModal {
  readonly isOpen: boolean;
  readonly children: React.ReactNode;
}

export default function FitModal({
  isOpen,
  children,
}: IFitModal): React.ReactElement<IFitModal> {
  return (
    <Modal
      aria-describedby="modal-modal-description"
      aria-labelledby="modal-modal-title"
      className="fitModal-container"
      open={isOpen}
    >
      <Box className="fitModal-box">{children}</Box>
    </Modal>
  );
}
