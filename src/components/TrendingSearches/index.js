import { useState, useEffect } from "react"
import getTrendingTerms from "services/getTrendingTermsService";
import Category from "../Category";

export default function TrendingSearches() {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        getTrendingTerms()
            .then(results =>
                setTrends(results));
    }, []);

    return <Category name='Tendencias' options={trends} />;

}