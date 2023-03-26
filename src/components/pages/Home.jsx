import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


export default function Home() {

    const [dataItems, setDataItems] = useState(() => {
        const savedValue = localStorage.getItem('searchResults');
        const parseValue = JSON.parse(savedValue);
        return parseValue || "";
    });
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);
    

    const [currentPage, setCurrentPage] = useState(1);
    const [counterPerPage] = useState(6);

    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
    }   

    useEffect(() => {
        localStorage.setItem('searchResults', JSON.stringify(dataItems))
    }, [dataItems])

    
    ///Индексация for пагинаtion

    const lastCountryIndex = currentPage * counterPerPage;
    const firstCountryIndex = lastCountryIndex - counterPerPage;
    const currentCountry = dataItems.slice(firstCountryIndex, lastCountryIndex);

    async function getData () {
        setLoading(true);
        await axios.get(`https://api.github.com/search/repositories?q=${inputValue}`)
            .then (response => {
                setDataItems(response.data.items);
            })
            .catch(error => {
                console.log(error);
            })
        setLoading(false);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    const nextPage = () => setCurrentPage(prev => prev + 1);
    const prevPage = () => setCurrentPage(prev => prev - 1); 

    return (
        <div>
            <Header 
                inputValue = {inputValue} 
                onChangeHandler = {onChangeHandler} 
                getData = {getData}
            />
            <Main 
                data = {currentCountry} 
                loading = {loading} 
            />
            {dataItems && 

                <Footer
                paginate = {paginate}
                totalCountries = {dataItems.length}
                counterPerPage = {counterPerPage}
                nextPage = {nextPage}
                prevPage = {prevPage}
                />   

            }         
        </div>
    )
}
