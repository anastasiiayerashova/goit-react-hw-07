import { useEffect } from 'react'
import './App.css'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import SearchBox from './SearchBox/SearchBox'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../redux/contactsOps'
import { selectLoading, selectError } from '../redux/contactsSlice'
import Loader from './Loader/Loader'
import { Toaster } from "react-hot-toast";

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  return (
    <div className='mainWrapper'>
      <Toaster/>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader/>}
      <ContactList/>
   </div>
 )
}