import React from 'react'
import CardList from './CardList/CardList';
import style from './Main.module.css';

export default function Main({data, loading}) {
    

    if(loading) {
        return <h2 className={style.main_title}>Поиск проектов...</h2>
    }

    return (
       <div className='main'>
            <div className='container'>
                <div className={style.main_collection}>
                    {data && data.map(({name, id , owner, watchers_count, stargazers_count, html_url}) => (
                        <CardList 
                            name = {name} 
                            img = {owner.avatar_url} 
                            auth = {owner.login} 
                            key = {id} 
                            countWatch = {watchers_count} 
                            countStar = {stargazers_count}
                            linkRepo = {html_url}
                            linkAuthor = {owner.html_url} 
                        /> 
                    ))}
                </div>
            </div>
       </div>
    )
}
