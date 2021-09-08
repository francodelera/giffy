import Spinner from 'components/Spinner';
import useSingleGif from 'hooks/useSingleGif';
import useSEO from 'hooks/useSEO';
import { Redirect } from 'wouter';
import Gif from '../../components/Gif';

export default function Detail({ params }) {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id });

    const title = gif ? gif.title : '';
    useSEO({ description: `Detail of ${title}`, title });

    if (isLoading) return <Spinner />
    if (isError) return <Redirect to='/404' />
    if (!gif) return null;

    return <>
        <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif} />
    </>
}

// or simply: return <Gif title={gif.title} id={gif.id} url={gif.url} />