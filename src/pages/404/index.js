import Gif from "components/Gif";
import Spinner from "components/Spinner";
import useRandomGif from "hooks/useRandomGif";
import { Helmet } from "react-helmet";

export default function ErrorPage() {
    const { loading, gif } = useRandomGif({ keyword: '404 error' });

    if (loading) return <Spinner />
    else {
        return (
            <>
                <Helmet>
                    <title>404 Error || Giffy </title>
                </Helmet>
                <h1>Oops! 404 Error</h1>
                {
                    gif !== undefined ?
                        <Gif
                            url={gif.url}
                            title={gif.title}
                            id={gif.id}
                        />
                        : <h1>Loading gif...</h1>
                }
            </>
        )
    }
}