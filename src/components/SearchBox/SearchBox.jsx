import s from './SearchBox.module.css';
import { useId } from 'react';
import { FiSearch } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
    const findId = useId();

    const dispatch = useDispatch()

    const handleChangeFilters = (e) => {
        dispatch(changeFilter(e.target.value))
    }

    return (
        <div className={s.findDiv}>
            <label htmlFor={findId} className={s.label}>Find contacts by name<FiSearch /></label>
            <input type='text' name='findName' id={findId} className={s.input} onChange={handleChangeFilters}></input>
        </div>
    )
}