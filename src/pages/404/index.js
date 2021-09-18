import Gif from "components/Gif";
import Spinner from "components/Spinner";
import useGifs from "hooks/useGifs";
import { useEffect, useState } from "react";

export default function ErrorPage() {
    const { loading, gifs } = useGifs({ keyword: 'error 404' });
    const [gif, setGif] = useState();

    const randomElement = gifs[Math.floor(Math.random() * gifs.length)];

    useEffect(() => {
        setGif(randomElement);
    }, [randomElement])

    if (loading) return <Spinner />
    else {
        return (
            <>
                <h1>Error 404</h1>
                {
                    randomElement !== undefined ?
                        <Gif
                            url={gif.url}
                            title={gif.title}
                            id={gif.id}
                        />
                        : <h1>Waiting</h1>
                }
            </>
        )
    }
}