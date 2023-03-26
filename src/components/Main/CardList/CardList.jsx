import React from 'react'
import { NavLink } from 'react-router-dom';
import {MdOutlineStar} from 'react-icons/md';
import {BsFillEyeFill} from 'react-icons/bs';
import CommentBox from './CommentBox/CommentBox';
import style from './CardList.module.css';






export default function CardList({name, img, auth, countStar, countWatch, linkRepo, linkAuthor, index}) {
    return (
        <div className={style.card_content}>
                <p className={style.card_content__name}><a href={linkRepo}>{name}</a></p>
                <div className={style.card_content__auth}>
                    <div className={style.card_content__auth___authorImg}>
                        <img src={img} alt={name} />
                    </div>
                    <p className={style.card_content__auth___authorName}><a href={linkAuthor}>{auth}</a></p>
                </div>
                <div className={style.card_content__info}>
                    <div className={style.card_content__info___counts}>
                        <div className={style.counts_star}>
                            <MdOutlineStar />
                            <p className={style.valueCount}>{countStar}</p>
                        </div>
                        <div className={style.counts_watch}>
                            <BsFillEyeFill />
                            <p className={style.valueCount}>{countWatch}</p>
                        </div>
                        <NavLink to={`/project/${index}`} className={style.btnInfo}>
                            Подробнее
                        </NavLink>
                    </div>
                </div>
                <CommentBox />
        </div>
    )
}
