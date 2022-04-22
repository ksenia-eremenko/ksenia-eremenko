import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, remove}) => {
    if (!posts.length) {
        return <div className="b-title bt16" style={{textAlign: "center"}}>Посты не найдены</div>
    }

    return (
        <div className="posts">
            <TransitionGroup>
                {posts.map((post, i) =>
                    <CSSTransition
                        // key={post.id}
                        key={i}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} post={post} id={i}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;