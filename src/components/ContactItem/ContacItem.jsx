import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import {
  Item,
    ContactIcon,
    ContactName,
    ContactNumber,
    Button,
} from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item key={id}>
          <ContactIcon />
      <ContactName>{name}: </ContactName>
      <ContactNumber>{number}</ContactNumber>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Item>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
