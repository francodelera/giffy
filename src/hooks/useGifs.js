import { useContext, useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;
export default function useGifs({ keyword, language, limit, rating } = { keyword: null }) {

    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const { gifs, setGifs } = useContext(GifsContext);
    const [page, setPage] = useState(INITIAL_PAGE);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

    useEffect(() => {
        setLoading(true);
        getGifs({ keyword: keywordToUse, language, limit, rating })
            .then(gifs => {
                setGifs(gifs);
                setLoading(false);
                localStorage.setItem('lastKeyword', keyword);
            })
    }, [keyword, keywordToUse, language, limit, rating, setGifs]);

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