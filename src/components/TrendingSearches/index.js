import { useState, useEffect, useRef } from "react"
import getTrendingTerms from "services/getTrendingTermsService";
import Category from "../Category";

export default function LazyTrending() {
    const [show, setShow] = useState(false);
    const elementRef = useRef();

    useEffect(() => {
        const onChange = (entries, observer) => {
            const element = entries[0];
            if (element.isIntersecting) {
                setShow(true);
                observer.disconnect();
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        });
        observer.observe(elementRef.current);

        return () => observer.disconnect();
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