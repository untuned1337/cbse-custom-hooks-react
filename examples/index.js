import React, { useState } from 'react';
import { useDebounce } from '../src';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const debouncedSearch = useDebounce(searchQuery, 500);

    // Handle search based on debounced value
    useEffect(() => {
        // Perform search operation using debounced value
    }, [debouncedSearch]);

    return (
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search" />
    );
};
