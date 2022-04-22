export const getPageCount = (totalCount, results) => {
    return Math.ceil(totalCount / results)
}

export const getPagesArray = (totalPages) => {
    let results = [];
    for (let i = 0; i < totalPages; i++) {
        results.push(i+1);
    }
    return results;
}