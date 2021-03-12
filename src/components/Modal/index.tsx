import * as React from "react";
import ReactModal from "react-modal";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  contentLabel: string;
  handleClose: () => void;
  modalWidth?: number;
};

const Modal = ({
  children,
  isOpen,
  contentLabel,
  handleClose,
  modalWidth = 64,
}: ModalProps) => {
  ReactModal.setAppElement("#root");
  const customStyles = {
    overlay: {
      backgroundColor: "#5f6c7bd6",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      inset: "",
      padding: "0",
      position: "relative",
      maxWidth: `calc(${modalWidth}vw - 3.2rem)`,
    },
  } as const;

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={contentLabel}
      onRequestClose={handleClose}
      style={customStyles}
    >
      <div className="modal">
        <section className="modal__header">{contentLabel}</section>
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
