import { act, renderHook } from '@testing-library/react-hooks';
import useForm from './hook';

test('should use initial values', () => {
    const { result } = renderHook(() => useForm({ initialKeyword: '', initialLanguage: 'en', initialRating: 'g' }))

    expect(result.current.keyword).toBe('');
    expect(result.current.language).toBe('en');
    expect(result.current.rating).toBe('g');
});

test('should change keyword', () => {
    const { result } = renderHook(() => useForm({ initialKeyword: '', initialLanguage: 'en', initialRating: 'g' }))

    act(() => result.current.updateKeyword('batman'));

    expect(result.current.keyword).toBe('batman');
});

test('should change language', () => {
    const { result } = renderHook(() => useForm({ initialKeyword: '', initialLanguage: 'en', initialRating: 'g' }))

    act(() => result.current.updateLanguage('pt'));

    expect(result.current.language).toBe('pt');
});

test('should change rating', () => {
    const { result } = renderHook(() => useForm({ initialKeyword: '', initialLanguage: 'en', initialRating: 'g' }))

    act(() => result.current.updateRating('pg-13'));

    expect(result.current.rating).toBe('pg-13');
});
