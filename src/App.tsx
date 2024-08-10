import { useState } from "react";
import { Modal } from "react-responsive-modal";

import "react-responsive-modal/styles.css";
import getReasonToLove from "./utils/getReason.util";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reasonToLove, setReasonToLove] = useState("");

  const onOpenModal = () => {
    const newReasonToLove = getReasonToLove();
    setReasonToLove(newReasonToLove);
    setIsModalOpen(true);
  };

  const onCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="container">
        <p className="text-type-one">365</p>
        <p className="text-type-two">Motivos para</p>
        <p className="text-type-three">amar a</p>
        <p className="text-type-four">Meizinha</p>

        <div className="button" onClick={onOpenModal}>
          <button>
            Clique aqui
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <Modal open={isModalOpen} onClose={onCloseModal} center>
        <p>{reasonToLove}</p>
      </Modal>
    </>
  );
}

export default App;
