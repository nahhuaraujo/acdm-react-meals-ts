import * as S from './Modal.styled';

interface Props {
  children: React.ReactNode;
  showModal: boolean;
  closeModal: () => void;
}

const Modal = (props: Props) => {
  if (!props.showModal) {
    return null;
  }
  return (
    <>
      <S.ModalBackdrop onClick={props.closeModal} />
      <S.Modal>{props.children}</S.Modal>
    </>
  );
};

export default Modal;
