import { useSelector } from 'react-redux';
import { IStore } from '../../../../../redux/store';
import { CartIcon } from '../../../../UI';
import * as S from './HeaderCartButton.styled';

interface Props {
  onOpenModal: () => void;
}

const HeaderCartButton = (props: Props) => {
  const { totalMeals } = useSelector((state: IStore) => state.cart);
  return (
    <S.HeaderCartButton onClick={props.onOpenModal}>
      <S.Icon>
        <CartIcon />
      </S.Icon>
      <span>Your cart</span>
      <S.Badge>{totalMeals}</S.Badge>
    </S.HeaderCartButton>
  );
};

export default HeaderCartButton;
