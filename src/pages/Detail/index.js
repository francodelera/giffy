import useSingleGif from 'hooks/useSingleGif';
import Gif from '../../components/Gif';

export default function Detail({ params }) {
    const { gif } = useSingleGif({ id: params.id });

    if (!gif) return null;

    return <>
        <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif} />
    </>
}

// or simply: return <Gif title={gif.title} id={gif.id} url={gif.url} />