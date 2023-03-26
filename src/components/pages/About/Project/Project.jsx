import React from 'react'
import {MdOutlineStar} from 'react-icons/md';
import {BsFillEyeFill} from 'react-icons/bs';
import style from './Project.module.css'


export default function Project({img, name, authName, description, lang, countWatch, countStar}) {
    return (
        <div className=''>
            <div className=''>
                <img src={img} alt={name} />
            </div>
            <div className=''>
                <div className=''>
                    <p>{name}</p>
                    <p>{authName}</p>
                    <p>{description}</p>
                </div>
                <div className=''>
                    <p>{lang}</p>
                </div>
                <div className=''>
                    <div className=''>
                        <MdOutlineStar />
                        <p className=''>{countStar}</p>
                    </div>
                    <div className=''>
                        <BsFillEyeFill />
                        <p className=''>{countWatch}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
