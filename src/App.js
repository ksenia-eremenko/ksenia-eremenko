import React, {useEffect, useState} from 'react';
import './styles/App.css'
import './styles/main.scss'
import PostList from "./components/Posts/PostList";
import PostForm from "./components/ModalForm/PostForm";
import PostFilter from "./components/Filter/PostFilter";
import ModalForm from "./components/ModalForm/ModalForm";
import StyledBtn from "./components/common/StyledBtn/StyledBtn";
import {usePosts} from "./components/hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/common/Loader/Loader";
import {useFetching} from "./components/hooks/useFetching";
// import { Range } from "https://cdn.skypack.dev/rc-slider@9.7.1";
import 'rc-slider/assets/index.css';
import {getPageCount, getPagesArray} from "./components/utils/pages";
import Pagination from "./components/common/Pagination/Pagination";


function App() {

    const [posts, setPosts] = useState([]);
     const [filter, setFilter] = useState({sort: '', query: ""});
    const [modal, setModal] = useState('');
    const [totalPages, setTotalPage] = useState(0);
    const [results, setResults] = useState(50);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [controlsPage, setControlsPage] = useState(0)
    let pagesArray = getPagesArray(totalPages)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(results, page);
        setPosts(response.data.results)
        // const totalCount =  response.data.info.results //100
        const totalCount =  500 //100
        setTotalPage(getPageCount(totalCount, results))
    })

    console.log(posts);

    useEffect(() => {
        fetchPosts();
    }, [])

    const createPost = (newPost) => {
        setPosts([newPost, ...posts]);
        setModal(false);
    }

    const removePost = (index) => {
        setPosts(posts.filter((p,i) => i !== index));
    }

    const changePage = (page) => {
        setPage(page);
        fetchPosts(results, page);
    }

    const [value, setValue] = useState( [ 0, 100 ] );

  return (
    <div className="app">
        <div id="content">
            <div className="container">
                <ModalForm visible={modal} setVisible={setModal}>
                    <PostForm
                        addPostFunction={createPost}
                    />
                </ModalForm>
                <div className="filter-wrapper">
                    <div className="filter-left">
                        <div className="b-title bt34 bold">Filter</div>
                        <div className="filter-in">
                            {/*<div className="filter-age">*/}
                            {/*    <p>{ value[0] } - { value[1] }</p>*/}
                            {/*    <Range*/}
                            {/*        draggableTrack*/}
                            {/*        min={ 0 }*/}
                            {/*        max={ 1000 }*/}
                            {/*        value={ value }*/}
                            {/*        onChange={ setValue }*/}
                            {/*    />*/}
                            {/*</div>*/}
                            <PostFilter
                                filter={filter}
                                setFilter={setFilter}
                            />
                            <StyledBtn onClick={() => setModal(true)}>Add new user</StyledBtn>
                        </div>
                    </div>
                    <div className="filter-right">
                        <div className="b-title bt34 bold">List of users</div>
                        {(postError)
                            ? 'Error'
                            : ''
                        }
                        {(isPostsLoading)
                            ? <Loader />
                            : <PostList remove={removePost} posts={sortedAndSearchedPosts} />
                        }
                        <Pagination page={page} changePage={changePage} totalPages={totalPages} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
