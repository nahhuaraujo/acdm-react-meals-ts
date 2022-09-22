import styled from 'styled-components';

export const Cart = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  position: fixed;
  top: 30vh;
  left: 30%;
  min-width: 40%;
  max-width: 70%;
  background-color: white;
  z-index: 20;
`;

export const MealsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
  font-weight: bold;
`;

export const Meal = styled.li`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
`;

export const Total = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const Actions = styled.div`
  text-align: right;
`;

export const CloseButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
  &:hover,
  &:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;

export const ConfirmButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
  color: white;
  &:hover,
  &:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;
