import React from 'react';
import {getPagesArray} from "../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className="pagination">
            {pagesArray.map(p =>
                <div className={(page === p) ? 'styled-btn styled-btn-2 active' : 'styled-btn styled-btn-2'}
                     key={p}
                     onClick={() => changePage(p)}
                >{p}</div>
            )}
        </div>
    );
};

export default Pagination;