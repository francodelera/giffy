import React, { useCallback, useEffect, useRef } from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';
import SearchForm from 'components/SearchForm';
import './styles.css';
import useRandomGif from 'hooks/useRandomGif';
import Gif from 'components/Gif';

export default function SearchResults({ params }) {
    const { keyword, language = 'en', rating = 'g' } = params
    const { loading, gifs, setPage } = useGifs({ keyword, language, rating });
    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    });
    const title = gifs ? `${gifs.length} results for "${decodeURI(keyword)}"` : '';
    const { gif } = useRandomGif({ keyword: 'No Results', limit: 500 });

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 1000
    ), [setPage]);

    useEffect(() => {
        if (isNearScreen) {
            debounceHandleNextPage();
        }
    }, [isNearScreen, debounceHandleNextPage])

    if (loading) return <Spinner />
    if (gifs.length !== 0) {
        return <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title}></meta>
            </Helmet>
            <header>
                <SearchForm initialKeyword={keyword} initialRating={rating} initialLanguage={language} />
            </header>
            <h3 className="App-title">🔎 Results for: '{decodeURI(keyword)}'</h3>
            <ListOfGifs gifs={gifs} />
            <div id="visor" ref={externalRef}></div>
            <br />
        </>
    } else {
        return <>
            <header>
                <SearchForm initialKeyword={keyword} initialRating={rating} initialLanguage={language} />
            </header>
            <p>❌ No results for: '{keyword}'</p>
            {
                gif !== undefined ?
                    <Gif
                        url={gif.url}
                        title={gif.title}
                        id={gif.id}
                    />
                    : <Spinner />
            }
        </>
    }
}