import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTracker() {
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) return;

        // Do not update if the user is on these pages
        const excludedPages = ['/profile', '/favorites'];
        if (excludedPages.includes(location.pathname)) return;

        const updateExplorationProgress = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/user/explore-page', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ page: location.pathname }),
                });

                const data = await response.json();
                if (data.message !== "Page already explored") {
                    console.log(`Page ${location.pathname} tracked successfully`);
                }
            } catch (err) {
                console.error('Failed to update exploration progress:', err);
            }
        };

        updateExplorationProgress();

        // Update last visited page
        const updateLastVisited = async () => {
            try {
                await fetch('http://localhost:3000/api/user/last-visited', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ page: location.pathname }),
                });
            } catch (err) {
                console.error('Failed to update last visited page:', err);
            }
        };

        updateLastVisited();
    }, [location.pathname]);

    return null; // This component doesn’t render anything
}
