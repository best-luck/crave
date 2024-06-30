import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialVisible: boolean) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialVisible);
    const timeRef = useRef<number>(new Date().getTime());
    const ref = useRef<HTMLDivElement>(null);

    const handleHideDropdown = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && (new Date().getTime() - timeRef.current > 1000)) {
            setIsComponentVisible(false);
        }
    };

    const handleClickOutside = (event: Event) => {
        console.log(new Date().getTime() - timeRef.current, 'outside');
        if (ref.current && !ref.current.contains(event.target as Node) && (new Date().getTime() - timeRef.current > 1000)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleHideDropdown, true);
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('keydown', handleHideDropdown, true);
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return { ref, isComponentVisible, setIsComponentVisible };
}