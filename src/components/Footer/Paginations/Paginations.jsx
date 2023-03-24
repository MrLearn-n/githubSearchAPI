import React from 'react'
import style from './Pagination.module.css'


export default function Paginations({counterPerPage, totalCountries, paginate}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCountries / counterPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <div className='pagination'>
            <ul className={style.pagination_list}>
                {pageNumbers.map(number => (
                <li className={style.pagination_item} key={number} onClick={() => paginate(number)}>
                    <a className={style.pagination_link}>
                        {number}
                    </a>
                </li>
                ))}
            </ul>
        </div>
    )
}
