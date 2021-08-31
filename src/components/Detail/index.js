import useGlobalGifs from 'hooks/useGlobalGifs';
import Gif from '../Gif';

export default function Detail({ params }) {
    const gifs = useGlobalGifs();

    const gif = gifs.find(singleGif => singleGif.id === params.id);

    return <>
        <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif} />
    </>
}

// or simply: return <Gif title={gif.title} id={gif.id} url={gif.url} />