import { useState, useEffect, useRef } from "react"
import getTrendingTerms from "services/getTrendingTermsService";
import Category from "../Category";

export default function LazyTrending() {
    const [show, setShow] = useState(false);
    const elementRef = useRef();

    useEffect(() => {
        let observer;
        const onChange = (entries, observer) => {
            const element = entries[0];
            if (element.isIntersecting) {
                setShow(true);
                observer.disconnect();
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: '100px'
            });
            observer.observe(elementRef.current);
        })


        return () => observer && observer.disconnect();
    })

    return <div ref={elementRef}>
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