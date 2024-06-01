import { useState } from "react";

/**
 * Handles pagination state for a list of items.
 * @param totalItems
 * @param itemsPerPage
 */
const usePagination = (totalItems, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return { currentPage, totalPages, paginate };
};

export default usePagination;
