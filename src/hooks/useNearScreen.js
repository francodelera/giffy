import { useRef, useState, useEffect } from 'react';

export default function useNearScreen({ distance = '100px' } = {}) {
    const [isNearScreen, setNearScreen] = useState(false);
    const fromRef = useRef();

    useEffect(() => {
        let observer;
        const onChange = (entries, observer) => {
            const element = entries[0];
            if (element.isIntersecting) {
                setNearScreen(true);
                observer.disconnect();
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
            observer.observe(fromRef.current);
        })


        return () => observer && observer.disconnect();
    })
    return { isNearScreen, fromRef };
}