import React, { useState } from 'react';
import {BsFillPencilFill} from 'react-icons/bs';
import style from './CommentBox.module.css'

export default function CommentBox() {
    return (
        <div className={style.commentBox}>
            <input placeholder='Комментарий к проекту' className={style.commentBox_input}/>
            <BsFillPencilFill className={style.iconPen}/>
        </div>
    )
}
