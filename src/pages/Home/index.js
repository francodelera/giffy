import React, { useCallback } from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";


export default function Home() {
    const lastSearch = localStorage.getItem('lastKeyword');
    const { loading, gifs } = useGifs();

    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <header>
                <SearchForm />
            </header>
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">🔎 Last search: <span>"{decodeURI(lastSearch)}"</span></h3>
                    <ListOfGifs gifs={gifs} />
                </div>
                <div className="App-category">
                    <TrendingSearches />
                </div>
            </div>
        </>
    )
}