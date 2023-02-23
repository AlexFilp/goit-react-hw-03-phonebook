import styled from 'styled-components';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const Label = styled.label`
  font-size: 25px;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  display: block;
  font-size: 20px;
`;

export const Btn = styled.button`
  padding: 7px;
  transition: color 150ms ease-in, background-color 150ms ease-in;
  &:hover,
  &:focus {
    color: white;
    background-color: #010101;
  }
`;
