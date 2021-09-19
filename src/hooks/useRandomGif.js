import useGifs from "./useGifs";
import { useState, useEffect } from "react";

export default function useRandomGif({ keyword, limit }) {
    const { loading, gifs } = useGifs({ keyword, limit });
    const [gif, setGif] = useState();

    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

    useEffect(() => {
        setGif(randomGif);
    }, [randomGif])

    return { loading, gif }
}