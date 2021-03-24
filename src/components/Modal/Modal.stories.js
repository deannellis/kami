import React, { useState } from "react";

import ModalComponent from "./index";
import Button from "../Button";

const [modalIsOpen, setModalIsOpen] = useState(false);
export default {
  component: ModalComponent,
  title: "Elements/Modal",
};

const Template = (args) => <ModalComponent {...args} />;
// const Template = (args) => (
//   <>
//     <ModalComponent {...args} />
//     <Button
//       onClick={() => {
//         setModalIsOpen(true);
//       }}
//     >
//       Open Modal
//     </Button>
//   </>
// );

export const Modal = Template.bind({});
Modal.args = {
  isOpen: modalIsOpen,
  handleClose: () => {
    setModalIsOpen(false);
  },
  contentLabel: "Sample Modal",
  children: "Test",
};
