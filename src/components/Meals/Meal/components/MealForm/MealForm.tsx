import { Input } from '../../../../UI';
import * as S from './MealForm.styled';

interface Props {
  mealId: number;
}

const MealForm = (props: Props) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.MealForm onSubmit={submitHandler}>
      <Input
        label='Amount'
        input={{ id: `amount_${props.mealId}`, type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }}
      />
      <button>Add</button>
    </S.MealForm>
  );
};

export default MealForm;
