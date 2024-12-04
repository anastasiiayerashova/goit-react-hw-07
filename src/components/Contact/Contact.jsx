import s from './Contact.module.css';
import { FaUser } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { LuMinus } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({...item}) {
    const dispatch = useDispatch()

    const handleDeleteContact = () => {
    dispatch(deleteContact(item.id))
    }
    
    return (
        <div className={s.item}>
            <div className={s.itemDiv}>  
                <div className={s.iconsDiv}>  
                    <FaUser />
                    <p className={s.name}>{item.name}</p>
                </div>
                <div className={s.iconsDiv}>  
                    <MdLocalPhone />
                    <p className={s.phone}>{item.number}</p>
                </div>
            </div>
            <button className={s.btn} type='button' onClick={handleDeleteContact}>Delete<LuMinus /></button>
        </div>
    )
}