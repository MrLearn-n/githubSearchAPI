import React from 'react'
import {IoMdArrowDropright, IoMdArrowDropleft} from 'react-icons/io'
import Paginations from './Paginations/Paginations'
import style from './Footer.module.css'

export default function Footer({counterPerPage, totalCountries, paginate, nextPage, prevPage}) {


    return (
        <div className='footer'>
            <div className='container'>
                <div className={style.footer_content}>
                    <IoMdArrowDropleft 
                        className={style.iconNavigation}
                        onClick = {nextPage}
                    />
                    <Paginations 
                        counterPerPage={counterPerPage} 
                        totalCountries = {totalCountries}
                        paginate = {paginate}
                    />
                    <IoMdArrowDropright 
                        className={style.iconNavigation}
                        onClick = {prevPage}    
                    />
                </div>
            </div>
        </div>
    )
}
