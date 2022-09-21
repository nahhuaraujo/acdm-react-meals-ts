import { IMeal } from '../../../models';
import { MealForm } from './components';
import * as S from './Meal.styled';

interface Props {
  meal: IMeal;
}

const Meal = (props: Props) => {
  const price = `$${props.meal.price.toFixed(2)}`;
  return (
    <S.Meal>
      <div>
        <h3>{props.meal.name}</h3>
        <S.Description>{props.meal.description}</S.Description>
        <S.Price>{price}</S.Price>
      </div>
      <div>
        <MealForm mealId={props.meal.id} />
      </div>
    </S.Meal>
  );
};

export default Meal;
