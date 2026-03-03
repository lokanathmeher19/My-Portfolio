import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const useScrollNavigation = (nextPath, prevPath) => {
    const navigate = useNavigate();
    // Use a ref to prevent multiple navigations in a short time (debounce/throttle)
    const isNavigating = useRef(false);

    useEffect(() => {
        const handleWheel = (e) => {
            if (isNavigating.current) return;

            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            // Threshold to trigger navigation (e.g., 5px from edge)
            const threshold = 5;

            // Navigate Next
            if (nextPath && e.deltaY > 0) {
                if (scrollTop + windowHeight >= docHeight - threshold) {
                    isNavigating.current = true;
                    navigate(nextPath);
                    setTimeout(() => { isNavigating.current = false; }, 1000); // Cooldown
                }
            }

            // Navigate Prev
            if (prevPath && e.deltaY < 0) {
                if (scrollTop <= threshold) {
                    isNavigating.current = true;
                    navigate(prevPath);
                    setTimeout(() => { isNavigating.current = false; }, 1000); // Cooldown
                }
            }
        };

        window.addEventListener('wheel', handleWheel);
        return () => window.removeEventListener('wheel', handleWheel);
    }, [navigate, nextPath, prevPath]);
};

export default useScrollNavigation;
