import { useContext, useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;
export default function useGifs({ keyword, language, rating } = { keyword: null }) {

    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const { gifs, setGifs } = useContext(GifsContext);
    const [page, setPage] = useState(INITIAL_PAGE);

    // recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

    useEffect(() => {
        setLoading(true);
        getGifs({ keyword: keywordToUse, language, rating })
            .then(gifs => {
                setGifs(gifs);
                setLoading(false);
                // guardamos la keyword en el localStorage
                localStorage.setItem('lastKeyword', keyword);
            })
    }, [keyword, keywordToUse, language, rating, setGifs]);

    useEffect(() => {
        if (page === INITIAL_PAGE) return;

        setLoadingNextPage(true);
        getGifs({ keyword: keywordToUse, language, rating, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs));
                setLoadingNextPage(false);
            })
    }, [keywordToUse, language, page, rating, setGifs]);

    return { loading, loadingNextPage, gifs, setPage };
}