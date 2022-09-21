import * as S from './Modal.styled';

interface Props {
  children: React.ReactNode;
  showModal: boolean;
  onCloseModal: () => void;
}

const Modal = (props: Props) => {
  if (!props.showModal) {
    return null;
  }
  return (
    <>
      <S.ModalBackdrop onClick={props.onCloseModal} />
      <S.Modal>{props.children}</S.Modal>
    </>
  );
};

export default Modal;
