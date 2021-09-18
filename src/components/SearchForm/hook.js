import { useReducer } from 'react'

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating',
    UPDATE_LANGUAGE: 'update_language'
}

const REDUCER = (state, action) => {
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

export default function useForm({ initialKeyword, initialLanguage, initialRating }) {
    const [state, dispatch] = useReducer(REDUCER, {
        keyword: decodeURIComponent(initialKeyword),
        language: initialLanguage,
        rating: initialRating,
        times: 0,
    });

    const { keyword, language, rating, times } = state;

    return {
        keyword,
        language,
        rating,
        times,
        updateKeyword: keyword => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
        updateLanguage: language => dispatch({ type: ACTIONS.UPDATE_LANGUAGE, payload: language }),
        updateRating: rating => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
    }
}