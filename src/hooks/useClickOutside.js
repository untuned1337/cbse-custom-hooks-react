import { useEffect } from "react";

/**
 * Detects clicks outside a specified element.
 * @param ref
 * @param callback
 */
const useClickOutside = (ref, callback) => {
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    });
};

export default useClickOutside;
