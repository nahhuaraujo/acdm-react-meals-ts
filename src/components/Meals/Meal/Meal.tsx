import { MealForm } from './components';
import * as S from './Meal.styled';

interface Props {
  meal: {
    id: number;
    name: string;
    description: string;
    price: number;
  };
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
        <MealForm meal={props.meal} />
      </div>
    </S.Meal>
  );
};

export default Meal;
