import { Container, Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Container>
      <label>
        <Label>Find contacts by name</Label>
        <input type="text" value={value} onChange={onChange} />
      </label>
    </Container>
  );
};
