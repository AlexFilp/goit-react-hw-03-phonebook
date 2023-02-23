import { List, Item, Text, Btn } from './Contacts.styled';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <List>
        {contacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Text>
                {name}: {number}
              </Text>
              <Btn onClick={() => onDelete(id)}>Delete</Btn>
            </Item>
          );
        })}
      </List>
    </>
  );
};
