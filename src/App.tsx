import { useState } from 'react';
import { Header, Main, Cart } from './components';
import { Modal } from './components/UI';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Modal showModal={showModal} closeModal={closeModal}>
        <Cart closeModal={closeModal} />
      </Modal>
      <Header openModal={openModal} />
      <Main />
    </div>
  );
};

export default App;
