import { useEffect, useState } from 'react';
import Category from 'components/Category';
import getTrendingTerms from 'services/getTrendingTermsService';

export default function TrendingSearches() {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        getTrendingTerms()
            .then(results =>
                setTrends(results));
    }, []);

    return <Category name='Tendencias' options={trends} />;
}