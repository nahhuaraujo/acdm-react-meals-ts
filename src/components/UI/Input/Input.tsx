import * as S from './Input.styled';

interface Props {
  label: string;
  input: {
    id: string;
    name: string;
    type: string;
    min?: string;
    max?: string;
    step?: string;
    value: number;
    defaultValue?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

const Input = (props: Props) => {
  return (
    <S.Input>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </S.Input>
  );
};

export default Input;
