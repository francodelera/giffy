import useGifs from "./useGifs";
import { useState, useEffect } from "react";
import getSingleGif from "services/getSingleGif";

export default function useSingleGif({ id }) {
    const { gifs } = useGifs();
    const gifFromCache = gifs.find(singleGif => singleGif.id === id);

    const [gif, setGif] = useState(gifFromCache);

    useEffect(() => {
        if (!gif) {
            getSingleGif({ id })
                .then(gif => setGif(gif));
        }
    }, [gif, id])

    return { gif };
}