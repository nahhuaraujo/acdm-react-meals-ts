import styled, { keyframes } from 'styled-components';

const mealsAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AvailableMeals = styled.section`
  font-weight: bold;
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: ${mealsAnimation} 1s ease-out forwards;
  > ul {
    list-style: none;
  }
`;
