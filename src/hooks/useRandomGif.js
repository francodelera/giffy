import useGifs from "./useGifs";
import { useState, useEffect } from "react";

export default function useRandomGif({ keyword }) {
    const { loading, gifs } = useGifs({ keyword });
    const [gif, setGif] = useState();

    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

    useEffect(() => {
        setGif(randomGif);
    }, [randomGif])

    return {
        loading,
        gif
    }
}