import { useSelector, useDispatch } from 'react-redux';
import { CartState } from '../../redux/slices/cart-slice';
import * as S from './Cart.styled';
import { cartActions } from '../../redux/slices/cart-slice';
import { IMeal } from '../../models';

interface Props {
  onCloseModal: () => void;
}

const Cart = (props: Props) => {
  const cart = useSelector((state: CartState) => state);
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
            <S.MealActions>
              <S.DecreaseMealAmount
                onClick={() => {
                  decreaseMealHandler(meal);
                }}
              >
                -
              </S.DecreaseMealAmount>
              <p>{meal.amount}</p>
              <S.IncreaseMealAmount
                onClick={() => {
                  increaseMealHandler(meal);
                }}
              >
                +
              </S.IncreaseMealAmount>
            </S.MealActions>
          </S.Meal>
        ))}
      </S.MealsList>
      <S.Total>
        <span>Total Amount</span>
        <span>${cart.finalPrice}</span>
      </S.Total>
      <S.CartActions>
        <S.CloseButton onClick={props.onCloseModal}>Close</S.CloseButton>
        <S.ConfirmButton>Order</S.ConfirmButton>
      </S.CartActions>
    </S.Cart>
  );
};

export default Cart;
