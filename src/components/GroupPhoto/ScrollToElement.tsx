'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export function ScrollToElement() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const scrollTo = searchParams.get('scrollTo');
        if (scrollTo) {
            const element = document.getElementById(scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [searchParams]);

    return null;
}
