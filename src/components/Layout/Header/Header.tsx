import mealsImg from '../../../assets/meals.jpg';
import { HeaderCartButton } from './components';
import * as S from './Header.styled';

interface Props {
  onOpenModal: () => void;
}

const Header = (props: Props) => {
  return (
    <>
      <S.Header>
        <h1>React Meals</h1>
        <HeaderCartButton onOpenModal={props.onOpenModal} />
      </S.Header>
      <S.MainImg>
        <S.Img src={mealsImg} />
      </S.MainImg>
    </>
  );
};

export default Header;
