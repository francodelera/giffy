import { useState, useEffect } from "react"
import getTrendingTerms from "services/getTrendingTermsService";
import Category from "../Category";

export default function LazyTrending() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onChange = (entries) => {
            const element = entries[0];
            if (element.isIntersecting) {
                setShow(true);
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        });
        observer.observe(document.getElementById('LazyTrending'));
    }, [])

    return <div id='LazyTrending'>
        {show ? <TrendingSearches /> : null}
    </div>
}

function TrendingSearches() {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        getTrendingTerms()
            .then(results =>
                setTrends(results));
    }, []);

    return <Category name='Tendencias' options={trends} />;
}