import React from 'react';
import { useLocation } from "wouter";
import useForm from "./hook";

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const LANGUAGES = ['en', 'es', 'pt'];

function SearchForm({ initialKeyword = '', initialLanguage = LANGUAGES[0], initialRating = RATINGS[0] }) {
    // eslint-disable-next-line no-unused-vars
    const [actualPath, navigateTo] = useLocation();

    const {
        keyword,
        language,
        rating,
        updateKeyword,
        updateLanguage,
        updateRating
    } = useForm({ initialKeyword, initialLanguage, initialRating });

    const handleSubmit = event => {
        event.preventDefault();
        if (keyword !== '') navigateTo(`/search/${keyword}/${rating}/${language}`);
    }

    const handleChange = event => {
        updateKeyword(event.target.value);
    }

    const handleChangeRating = event => {
        updateRating(event.target.value);
    }

    const handleChangeLanguage = event => {
        updateLanguage(event.target.value);
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
            <select value={language} onChange={handleChangeLanguage}>
                <option disabled>Language</option>
                {LANGUAGES.map(language => <option key={language}>{language}</option>)}
            </select>
        </form>
    )

}

export default React.memo(SearchForm);