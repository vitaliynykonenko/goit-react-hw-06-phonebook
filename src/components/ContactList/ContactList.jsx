import { useSelector } from 'react-redux';
import {ContactItem} from '../ContactItem/ContacItem';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedData = filter.toLowerCase();
  const normalizedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedData)
  );

  return (
    <List>
      {normalizedContacts.map(({ id, name, number }) => (
        <ContactItem name={name} number={number} key={id} id={id} />
      ))}
    </List>
  );
}
