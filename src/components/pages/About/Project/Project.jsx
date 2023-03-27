import React from 'react'
import { MdOutlineStar } from 'react-icons/md';
import { BsFillEyeFill } from 'react-icons/bs';
import style from './Project.module.css'


export default function Project({ img, name, authName, description, lang, url, countWatch, countStar }) {
    return (
        <div className='project'>
            <div className={style.project_info}>
                <div className={style.project_info__img}>
                    <img src={img} alt={name} />
                </div>
                <div className={style.project_info__text}>
                    <div className={style.info__text}>
                        <p>Название проекта: {name}</p>
                        <p>Имя автора: {authName}</p>
                        <p>Описание: {description}</p>
                    </div>
                    <div className=''>
                        <p>Языки: {lang}</p>
                    </div>
                    <div className={style.project_info__text___counts}>
                        <div className={style.counts_star}>
                            <MdOutlineStar />
                            <p className={style.valueCount}>{countStar}</p>
                        </div>
                        <div className={style.counts_watch}>
                            <BsFillEyeFill />
                            <p className={style.valueCount}>{countWatch}</p>
                        </div>
                    </div>
                    <div className=''>
                        <p>URL: <a href={url}> {url} </a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
