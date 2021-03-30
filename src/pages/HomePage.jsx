import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";

import PageLayout from "../components/PageLayout";
import Modal from "../components/Modal";
import SampleForm from "../components/Forms/SampleForm";
import SongList from "../components/SongList";
import Button from "../components/Button";

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
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
              officiis! Illum fugiat quos, repudiandae consequuntur dolorem
              natus nesciunt libero sit repellat!
            </p>
          </div>
          <div className="modal__footer">
            <Button
              onClick={() => {
                setModalIsOpen(false);
              }}
            >
              No way
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setModalIsOpen(false);
              }}
            >
              Aww Yeah
            </Button>
          </div>
        </Modal>
        <h1>UI Elements</h1>
        <h2>Buttons</h2>
        <div className="buttons">
          <Button
            onClick={() => {
              console.log("default button clicked");
            }}
          >
            Default
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              console.log("primary button clicked");
            }}
          >
            Primary
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              console.log("outline button clicked");
            }}
          >
            Outline
          </Button>
          <Button
            variant="no-style"
            onClick={() => {
              console.log("no style button clicked");
            }}
          >
            No Style
          </Button>
        </div>
        <h2>Modal</h2>
        <Button
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          Open Modal
        </Button>
        <h1>Form Elements</h1>
        <h2>Sample Form</h2>
        <SampleForm />
        <h1>Pagination</h1>
        <SongList />
      </PageLayout>
    </QueryClientProvider>
  );
};

export default HomePage;
