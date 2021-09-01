import { useState, useEffect } from "react"
import useNearScreen from "hooks/useNearScreen";
import getTrendingTerms from "services/getTrendingTermsService";
import Category from "components/Category";

export default function LazyTrending() {
    const { isNearScreen, fromRef } = useNearScreen({ distance: '100px' });

    return <div ref={fromRef}>
        {isNearScreen ? <TrendingSearches /> : null}
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