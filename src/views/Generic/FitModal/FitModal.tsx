import React from "react";
import { Box, Modal } from "@material-ui/core";
import "./FitModal.scss";

export type TFitModal = {
  isOpen: boolean;
  children: JSX.Element;
};

const FitModal: React.FC<TFitModal> = ({ isOpen, children }: TFitModal) => {
  return (
    <Modal
      className="fitModal-container"
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="fitModal-box">{children}</Box>
    </Modal>
  );
};

export default FitModal;
