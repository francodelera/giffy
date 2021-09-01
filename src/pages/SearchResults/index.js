import React from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import useGifs from 'hooks/useGifs'
import './styles.css';

export default function SearchResults({ params }) {
    const { keyword } = params
    const { loading, loadingNextPage, gifs, setPage } = useGifs({ keyword });

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    }


    if (loading || loadingNextPage) return <Spinner />
    if (gifs.length !== 0) {
        return <>
            <h3 className="App-title">Resultados para: '{keyword.replace(/%20/g, " ")}'</h3>
            <ListOfGifs gifs={gifs} />
            <br />
            <button className="NextPageButton" onClick={handleNextPage}>Get next page</button>
        </>
    } else {
        return <p>No hay resultados para: '{keyword}'</p>
    }
}