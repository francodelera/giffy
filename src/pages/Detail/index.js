import Spinner from 'components/Spinner';
import useSingleGif from 'hooks/useSingleGif';
import { Redirect } from 'wouter';
import Gif from '../../components/Gif';
import { Helmet } from 'react-helmet';

export default function Detail({ params }) {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id });

    const title = gif ? gif.title : '';

    if (isLoading) {
        return (
            <>
                <Helmet>
                    <title>Loading...</title>
                </Helmet>
                <Spinner />
            </>
        )
    }
    if (isError) return <Redirect to='/404' />
    if (!gif) return null;

    return <>
        <Helmet>
            <title>{title} || Giffy </title>
        </Helmet>
        <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif} />
    </>
}

// or simply: return <Gif title={gif.title} id={gif.id} url={gif.url} />