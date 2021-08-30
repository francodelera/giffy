import React from 'react'
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import useGifs from '../../hooks/useGifs'

export default function SearchResults({ params }) {
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword });


    if (loading) return <Spinner />
    if (gifs.length !== 0) {
        return <>
            <h3 className="App-title">Search for: '{keyword}'</h3>
            <ListOfGifs gifs={gifs} />
        </>
    } else {
        return <p>No results for: '{keyword}'</p>
    }
}