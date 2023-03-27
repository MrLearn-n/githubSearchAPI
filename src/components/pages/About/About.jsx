import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import Project from './Project/Project';


export default function AboutProject() {
    const paramValue = useParams();
    const paramValueID = paramValue.id;

    
    const [value, setValue] = useState(() => {
        const getValue = localStorage.getItem('searchResults');
        const parseGetValue = JSON.parse(getValue);
        return parseGetValue || "";
    });



    return (
        <div className='project'>
            <div className='container'>
                {
                    value.map((
                            {
                                owner, 
                                name, 
                                description, 
                                id, 
                                language, 
                                watchers_count, 
                                stargazers_count,
                                html_url
                            }) => {
                                
                            if(owner.id == paramValueID) {
                                return  (
                                    <Project 
                                        img = {owner.avatar_url}
                                        name = {name}
                                        description = {description}
                                        authName = {owner.login}
                                        key = {id}
                                        lang = {language}
                                        countWatch = {watchers_count}
                                        countStar = {stargazers_count}
                                        url = {html_url}
                                    />
                                )
                            }
                        })
                    }         
            </div>
        </div>
    )
}
