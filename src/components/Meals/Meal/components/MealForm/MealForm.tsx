import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../../redux/slices/cart-slice';
import { Input } from '../../../../UI';
import * as S from './MealForm.styled';

interface Props {
  meal: {
    id: number;
    name: string;
    description: string;
    price: number;
  };
}

const MealForm = (props: Props) => {
  const [amount, setAmount] = useState<number>(1);
  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(cartActions.addMeal({ ...props.meal, amount }));
    setAmount(1);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value <= 5) {
      setAmount(value);
    }
  };

  return (
    <S.MealForm onSubmit={submitHandler}>
      <Input
        label='Amount'
        input={{
          id: `amount_${props.meal.id}`,
          name: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          value: amount,
          onChange,
        }}
      />
      <button>Add</button>
    </S.MealForm>
  );
};

export default MealForm;
