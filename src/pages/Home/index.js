import React, { useCallback } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";


export default function Home() {
    const lastSearch = localStorage.getItem('lastKeyword');

    // eslint-disable-next-line no-unused-vars
    const [actualPath, navigateTo] = useLocation();
    const { loading, gifs } = useGifs();

    const handleSubmit = useCallback(({ keyword }) => {
        if (keyword !== '') navigateTo(`/search/${keyword}`);
    }, [navigateTo]);


    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <SearchForm onSubmit={handleSubmit} />
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