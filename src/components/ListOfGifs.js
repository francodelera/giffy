import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif"

export default function ListOfGifs({ params }) {
    const { keyword } = params;
    const [gifs, setGifs] = useState(
        { loading: false, results: [] });

    useEffect(function () {
        setGifs(actualGifs => ({ loading: true, results: actualGifs.results }));
        getGifs({ keyword })
            .then(gifs => {
                setGifs({ loading: false, results: gifs });
            });
    }, [keyword]);

    if (gifs.loading) return <h1>Loading...</h1>
    return (
        gifs.results.map(({ id, title, url }) =>
            <Gif
                key={id}
                id={id}
                title={title}
                url={url}
            />)
    )
}