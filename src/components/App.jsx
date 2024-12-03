import './App.css'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import SearchBox from './SearchBox/SearchBox'

export default function App() {
  return (
    <div className='mainWrapper'>
      <ContactForm />
      <SearchBox />
      <ContactList/>
   </div>
 )
}


