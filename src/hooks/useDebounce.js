import { useEffect, useState } from 'react';

function usedebounce(initial = '', delay = 1000) {
    //
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [debounce, setDebounce] = useState(initial);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(initial);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [delay, initial]);

    return debounce;
}

export default usedebounce;
