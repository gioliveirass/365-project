import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = () => setIsModalOpen(true);
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
        <p>Simple centered modal</p>
      </Modal>
    </>
  );
}

export default App;
