import React, { useCallback, useEffect, useRef } from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import useGifs from 'hooks/useGifs'
import './styles.css';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';

export default function SearchResults({ params }) {
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword });
    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    });

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 1000
    ), []);

    useEffect(() => {
        if (isNearScreen) {
            debounceHandleNextPage();
        }
    }, [isNearScreen, debounceHandleNextPage])

    if (loading) return <Spinner />
    if (gifs.length !== 0) {
        return <>
            <h3 className="App-title">Resultados para: '{keyword.replace(/%20/g, " ")}'</h3>
            <ListOfGifs gifs={gifs} />
            <div id="visor" ref={externalRef}></div>
            <br />
            {/* <button className="NextPageButton" onClick={handleNextPage}>Get next page</button> */}
        </>
    } else {
        return <p>No hay resultados para: '{keyword}'</p>
    }
}