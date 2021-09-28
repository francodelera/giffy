import { useState, useEffect } from "react";
import getGifs from "services/getGifs";

export default function useRandomGif({ keyword, limit }) {
    const [gif, setGif] = useState();

    useEffect(() => {
        getGifs({ keyword, limit })
            .then(gifs => {
                let randomGif = {};
                if (gifs.length !== 0) randomGif = gifs[Math.floor(Math.random() * gifs.length)];
                setGif(randomGif);
            })
    }, [keyword, limit]);

    return { gif }
}