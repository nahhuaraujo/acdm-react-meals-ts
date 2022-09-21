import { useState } from 'react';
import mealsImg from '../../../assets/meals.jpg';
import { Cart } from '../../Cart';
import { Modal } from '../../UI';
import { HeaderCartButton } from './components';
import * as S from './Header.styled';

interface Props {
  openModal: () => void;
}

const Header = (props: Props) => {
  return (
    <>
      <S.Header>
        <h1>React Meals</h1>
        <HeaderCartButton openModal={props.openModal} />
      </S.Header>
      <S.MainImg>
        <S.Img src={mealsImg} />
      </S.MainImg>
    </>
  );
};

export default Header;
