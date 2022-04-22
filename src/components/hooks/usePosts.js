import {useMemo} from "react";


export const useSortedPosts = (posts, sort) => {
    // console.log(posts);
//сортировка постов
    const sortedPosts = useMemo(() => {
        if (sort === "country") {
            console.log(sort);
            return [...posts].sort((a,b) => {
                if (a.location.country < b.location.country) {
                    return -1
                }
                if (a.location.country > b.location.country) {
                    return 1
                }
                return 0;
            })
        }

        if (sort === "name") {
            console.log(sort);
            return [...posts].sort((a,b) => {
                if (a.name.first < b.name.first) {
                    return -1
                }
                if (a.name.first > b.name.first) {
                    return 1
                }
                return 0;
            })
        }
        if (sort === "created") {
            return [...posts].sort((a,b) => new Date(a.dob.date).getTime() - new Date(b.dob.date).getTime())
        }
            return posts;
    }, [sort, posts]);

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.name.first.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts]);

    return sortedAndSearchedPosts;
}