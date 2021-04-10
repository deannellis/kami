import React from "react";

import ModalComponent from "./index";
import Button from "../Button";

export default {
  component: ModalComponent,
  title: "Elements/Modal",
};

const Template = (args) => <ModalComponent {...args} />;

export const Modal = Template.bind({});
Modal.args = {
  isOpen: true,
  handleClose: () => {},
  contentLabel: "Sample Modal",
  children: (
    <>
      <div className="modal__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          consequatur rerum nostrum porro magni cupiditate fugit, cumque tempore
          quaerat corporis ipsum quos a, deleniti distinctio eius maxime
          repellat repudiandae impedit.
        </p>
      </div>
      <div className="modal__footer">
        <Button variant="primary" onClick={() => {}}>
          Aww Yeah
        </Button>
        <Button onClick={() => {}}>No Way</Button>
      </div>
    </>
  ),
};
