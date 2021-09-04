import React, { useState } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import useGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";


export default function Home() {

    const lastSearch = localStorage.getItem('lastKeyword');

    const [keyword, setKeyword] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [actualPath, navigateTo] = useLocation();

    const handleSubmit = event => {
        event.preventDefault();
        if (keyword !== '') navigateTo(`/search/${keyword}`);
    }

    const handleChange = event => {
        setKeyword(event.target.value);
    }

    const { loading, gifs } = useGifs();

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Search gifs'
                    type='text'
                    value={keyword}
                    onChange={handleChange} />
                <button>🔎</button>
            </form>
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda: "{decodeURI(lastSearch)}"</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
                <div className="App-category">
                    <TrendingSearches />
                </div>
            </div>
        </>
    )
}