import React, { useState } from "react";
import { useLocation } from "wouter";

function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [actualPath, navigateTo] = useLocation();

    const handleSubmit = event => {
        event.preventDefault();
        if (keyword !== '') navigateTo(`/search/${keyword}`);
    }

    const handleChange = event => {
        setKeyword(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Search gifs'
                type='text'
                value={keyword}
                onChange={handleChange} />
            <button>🔎</button>
        </form>
    )

}

export default React.memo(SearchForm);