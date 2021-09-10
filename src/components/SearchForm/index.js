import React, { useState } from "react";
import { useLocation } from "wouter";

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

function SearchForm() {
    const [keyword, setKeyword] = useState('');
    const [rating, setRating] = useState(RATINGS[0]);
    // eslint-disable-next-line no-unused-vars
    const [actualPath, navigateTo] = useLocation();

    const handleSubmit = event => {
        event.preventDefault();
        if (keyword !== '') navigateTo(`/search/${keyword}/${rating}`);
    }

    const handleChange = event => {
        setKeyword(event.target.value);
    }

    const handleChangeRating = event => {
        setRating(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Search gifs'
                type='text'
                value={keyword}
                onChange={handleChange} />
            <button>🔎</button>
            <select value={rating} onChange={handleChangeRating}>
                <option disabled>Rating type</option>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select>
        </form>
    )

}

export default React.memo(SearchForm);