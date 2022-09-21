import { MealsSummary, AvailableMeals } from '../../Meals';
import * as S from './Main.styled';

const Main = () => {
  return (
    <S.Main>
      <MealsSummary />
      <AvailableMeals />
    </S.Main>
  );
};

export default Main;
