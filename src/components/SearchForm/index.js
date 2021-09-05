import React, { useState } from "react";

function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        if (keyword !== '') onSubmit({ keyword })
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