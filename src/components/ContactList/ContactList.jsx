import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts)

  return (
    <ul className={s.list}>
      {contacts.map((item) => (
        <li key={item.id}>  
          <Contact {...item}/>
        </li>
      ))}
    </ul>
  );
}