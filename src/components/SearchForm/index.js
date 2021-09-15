import React, { useReducer } from "react";
import { useLocation } from "wouter";

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const LANGUAGES = ['en', 'es', 'pt'];

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating',
    UPDATE_LANGUAGE: 'update_language'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.payload,
                times: state.times + 1,
            }
        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload,
            }
        case ACTIONS.UPDATE_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            }
        default:
            return state;
    }
}

function SearchForm({ initialKeyword = '', initialLanguage = LANGUAGES[0], initialRating = RATINGS[0] }) {
    // eslint-disable-next-line no-unused-vars
    const [actualPath, navigateTo] = useLocation();

    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        language: initialLanguage,
        rating: initialRating,
        times: 0,
    });

    const { keyword, language, rating, times } = state;

    const handleSubmit = event => {
        event.preventDefault();
        if (keyword !== '') navigateTo(`/search/${keyword}/${rating}/${language}`);
    }

    const handleChange = event => {
        dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: event.target.value });
    }

    const handleChangeRating = event => {
        dispatch({ type: ACTIONS.UPDATE_RATING, payload: event.target.value });
    }

    const handleChangeLanguage = event => {
        console.log(event.target.value)
        dispatch({ type: ACTIONS.UPDATE_LANGUAGE, payload: event.target.value });
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
            <small>{times}</small>
        </form>
    )

}

export default React.memo(SearchForm);