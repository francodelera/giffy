import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import useGifs from "../../hooks/useGifs";

const POPULAR_GIFS = ["Simpsons", "Family Guy", "Futurama", "Pokemon"];

export default function Home() {
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
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className="App-title">Los gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}