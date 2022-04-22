import React from 'react';
import StyledBtn from "../common/StyledBtn/StyledBtn";
import Moment from 'react-moment';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post-image">
                <img src="https://i.pinimg.com/280x280_RS/b5/bd/bf/b5bdbf7ca30c4ee413601cf40635c0e5.jpg" alt=""/>
            </div>
            <div className="post-content">
                <div className="name b-title bt20 bold">
                    {props.post.name.first} {props.post.name.last}
                </div>
                <div className="date b-title bt12 medium color4">
                    <Moment format="D MMM YYYY">
                        {props.post.dob.date}
                    </Moment>
                    </div>
                <div className="address b-title bt12">{props.post.location.country}</div>
                <div className="email b-title bt12">{props.post.email}</div>
            </div>
            <StyledBtn onClick={() => props.remove(props.id)}>Delete</StyledBtn>
        </div>
    );
};

export default PostItem;