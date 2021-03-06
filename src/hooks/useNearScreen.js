import { useRef, useState, useEffect } from 'react';

export default function useNearScreen({ distance = '100px',
    externalRef, once = true } = {}) {
    const [isNearScreen, setNearScreen] = useState(false);
    const fromRef = useRef();

    useEffect(() => {
        let observer;

        const element = externalRef ? externalRef.current : fromRef.current;

        const onChange = (entries, observer) => {
            const element = entries[0];
            if (element.isIntersecting) {
                setNearScreen(true);
                once && observer.disconnect();
            } else {
                !once && setNearScreen(false);
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance,
            });
            if (element) observer.observe(element);
        })


        return () => observer && observer.disconnect();
    })
    return { isNearScreen, fromRef };
}