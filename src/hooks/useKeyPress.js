import { useEffect } from 'react';

/**
 * Listens for keypress events and triggers specified actions.
 * @param targetKey
 * @param callback
 */
const useKeyPress = (targetKey, callback) => {
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === targetKey) {
                callback();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [targetKey, callback]);
};

export default useKeyPress;
