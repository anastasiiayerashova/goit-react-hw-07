import s from './ContactList.module.css';
import Contact from '../Contact/Contact';



export default function ContactList() {
    
   
  return (
    <ul className={s.list}>
      {filteredData.map((item) => (
        <li key={item.id}>  
          <Contact {...item}/>
        </li>
      ))}
    </ul>
  );
}