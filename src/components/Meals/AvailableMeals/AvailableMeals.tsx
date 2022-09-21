import { DUMMY_MEALS } from '../../../data';
import { Card } from '../../UI';
import { Meal } from '../Meal';
import * as S from './AvailableMeals.styled';

const AvailableMeals = () => {
  return (
    <S.AvailableMeals>
      <Card>
        <ul>
          {DUMMY_MEALS.map(meal => (
            <Meal key={meal.id} meal={meal} />
          ))}
        </ul>
      </Card>
    </S.AvailableMeals>
  );
};

export default AvailableMeals;
