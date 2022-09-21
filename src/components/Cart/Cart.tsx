import * as S from './Cart.styled';

interface Props {
  onCloseModal: () => void;
}

const Cart = (props: Props) => {
  const DUMMY_CART_ITEMS = [
    {
      id: Math.random(),
      name: 'Sushi',
      amount: 2,
      price: 3.99,
    },
    {
      id: Math.random(),
      name: 'Pizza',
      amount: 1,
      price: 10,
    },
  ];

  return (
    <S.Cart>
      <S.CartItems>
        {DUMMY_CART_ITEMS.map(cartItem => (
          <li key={cartItem.id}>{cartItem.name}</li>
        ))}
      </S.CartItems>
      <S.Total>
        <span>Total Amount</span>
        <span>$12.99</span>
      </S.Total>
      <S.Actions>
        <S.CloseButton onClick={props.onCloseModal}>Close</S.CloseButton>
        <S.ConfirmButton>Order</S.ConfirmButton>
      </S.Actions>
    </S.Cart>
  );
};

export default Cart;
