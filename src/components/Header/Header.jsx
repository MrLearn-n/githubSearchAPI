import React from 'react'
import {BsSearch} from 'react-icons/bs';
import style from './Header.module.css'



export default function Header({inputValue, onChangeHandler, getData}) {


    return (
        <div className='header'>
            <div className='container'>
                <div className={style.header_content}>
                    <input type = "text" name = "name" className={style.header_content__input} placeholder='Начните вводить текст для поиска (не менее трех символов)' value={inputValue} onChange={onChangeHandler}/>
                    <div className={style.header_content__btn} onClick = {getData}>
                        <BsSearch className={style.searchIcon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
