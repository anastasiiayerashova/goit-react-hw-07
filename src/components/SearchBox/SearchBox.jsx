import s from './SearchBox.module.css';
import { useId } from 'react';
import { FiSearch } from "react-icons/fi";
import { useDispatch } from 'react-redux';


export default function SearchBox() {
    const findId = useId();

    const dispatch = useDispatch()

    
    
    return (
        <div className={s.findDiv}>
            <label htmlFor={findId} className={s.label}>Find contacts by name<FiSearch /></label>
            <input type='text' name='findName' id={findId} className={s.input} onChange={handleChangeFilters}></input>
        </div>
    )
}