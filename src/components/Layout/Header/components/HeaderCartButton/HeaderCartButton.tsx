import { CartIcon } from '../../../../UI';
import * as S from './HeaderCartButton.styled';

interface Props {
  onOpenModal: () => void;
}

const HeaderCartButton = (props: Props) => {
  return (
    <S.HeaderCartButton onClick={props.onOpenModal}>
      <S.Icon>
        <CartIcon />
      </S.Icon>
      <span>Your cart</span>
      <S.Badge>3</S.Badge>
    </S.HeaderCartButton>
  );
};

export default HeaderCartButton;
