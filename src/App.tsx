import { useState } from 'react';
import { Header, Main, Cart } from './components';
import { Modal } from './components/UI';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Modal showModal={showModal} onCloseModal={closeModalHandler}>
        <Cart onCloseModal={closeModalHandler} />
      </Modal>
      <Header onOpenModal={openModalHandler} />
      <Main />
    </div>
  );
};

export default App;
