import useGlobalGifs from '../../hooks/useGlobalGifs';
import Gif from '../Gif';

export default function Detail({ params }) {
    const gifs = useGlobalGifs();

    const gif = gifs.find(singleGif => singleGif.id === params.id);

    return <Gif title={gif.title} id={gif.id} url={gif.url} /> // or <Gif { ...gifs }/>
}