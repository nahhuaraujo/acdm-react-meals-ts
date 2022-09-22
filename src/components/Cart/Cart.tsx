import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../redux/store';
import * as S from './Cart.styled';
import { cartActions } from '../../redux/slices/cart-slice';
import { IMeal } from '../../models';

interface Props {
  onCloseModal: () => void;
}

const Cart = (props: Props) => {
  const cart = useSelector((state: IStore) => state.cart);
  const dispatch = useDispatch();

  const decreaseMealHandler = (meal: IMeal) => {
    dispatch(cartActions.decreaseMealAmount(meal));
  };

  const increaseMealHandler = (meal: IMeal) => {
    dispatch(cartActions.increaseMealAmount(meal));
  };

  return (
    <S.Cart>
      <S.MealsList>
        {cart.meals.map(meal => (
          <S.Meal key={meal.id}>
            <p>{meal.name}</p>
            <button
              onClick={() => {
                decreaseMealHandler(meal);
              }}
            >
              -
            </button>
            <p>{meal.amount}</p>
            <button
              onClick={() => {
                increaseMealHandler(meal);
              }}
            >
              +
            </button>
          </S.Meal>
        ))}
      </S.MealsList>
      <S.Total>
        <span>Total Amount</span>
        <span>${cart.finalPrice}</span>
      </S.Total>
      <S.Actions>
        <S.CloseButton onClick={props.onCloseModal}>Close</S.CloseButton>
        <S.ConfirmButton>Order</S.ConfirmButton>
      </S.Actions>
    </S.Cart>
  );
};

export default Cart;
