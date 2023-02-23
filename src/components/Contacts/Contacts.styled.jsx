import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  height: 400px;
  width: 400px;
`;

export const Item = styled.li`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Text = styled.p``;

export const Btn = styled.button`
  padding: 7px;
  transition: color 150ms ease-in, background-color 150ms ease-in;
  &:hover,
  &:focus {
    color: white;
    background-color: #010101;
  }
`;
