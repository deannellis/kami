import React, { useState } from "react";

import PageLayout from "../components/PageLayout";
import Modal from "../components/Modal";

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <PageLayout>
      <Modal
        contentLabel="Sample Modal"
        isOpen={modalIsOpen}
        handleClose={() => {
          setModalIsOpen(false);
        }}
      >
        <div className="modal__content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            eaque sapiente voluptatum assumenda asperiores quas, odio quos ut
            officiis! Illum fugiat quos, repudiandae consequuntur dolorem natus
            nesciunt libero sit repellat!
          </p>
        </div>
        <div className="modal__footer">
          <button
            className="button"
            type="button"
            onClick={() => {
              setModalIsOpen(false);
            }}
          >
            No way
          </button>
          <button
            className="button--primary"
            type="button"
            onClick={() => {
              setModalIsOpen(false);
            }}
          >
            Aww Yeah
          </button>
        </div>
      </Modal>
      <h1>Elements</h1>
      <h2>Buttons</h2>
      <div className="buttons">
        <button className="button" type="button">
          Default
        </button>
        <button className="button--primary" type="button">
          Primary
        </button>
        <button className="button--outline" type="button">
          Outline
        </button>
        <button className="button--no-style" type="button">
          No Style
        </button>
      </div>
      <h2>Modal</h2>
      <button
        className="button"
        type="button"
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        Open Modal
      </button>
    </PageLayout>
  );
};

export default HomePage;
