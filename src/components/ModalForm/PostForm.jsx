import React, {useState} from 'react';
import StyledInput from "../common/Input/StyledInput";
import StyledBtn from "../common/StyledBtn/StyledBtn";

const PostForm = ({addPostFunction}) => {
    const [newPostFirstName, setNewPostFirstName] = useState('');
    const [newPostLastName, setNewPostLastName] = useState('');
    const [newPostDOB, setNewPostDOB] = useState('');
    const [newPostCountry, setNewPostCountry] = useState('');
    const [newPostEmail, setNewPostEmail] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            name: {
                first: newPostFirstName,
                last: newPostLastName
            },
            dob: {
                date: newPostDOB
            },
            location: {
                country: newPostCountry
            },
            email: newPostEmail
        };

        setNewPostFirstName('');
        setNewPostLastName('');
        setNewPostDOB('');
        setNewPostCountry('');
        setNewPostEmail('');

        addPostFunction(newPost);
    };

    return (
        <form className="form-style">
            <div className="f-item">
                <StyledInput
                    value={newPostFirstName}
                    onChange={e => setNewPostFirstName(e.target.value)}
                    type="text"
                    placeholder="First name"
                />
            </div>
            <div className="f-item">
                <StyledInput
                    value={newPostLastName}
                    onChange={e => setNewPostLastName(e.target.value)}
                    type="text"
                    placeholder="Last name"
                />
            </div>
            <div className="f-item">
                <StyledInput
                    value={newPostDOB}
                    onChange={e => setNewPostDOB(e.target.value)}
                    type="text"
                    placeholder="Date of Birth"
                />
            </div>
            <div className="f-item">
                <StyledInput
                    value={newPostCountry}
                    onChange={e => setNewPostCountry(e.target.value)}
                    type="text"
                    placeholder="Country"
                />
            </div>
            <div className="f-item">
                <StyledInput
                    value={newPostEmail}
                    onChange={e => setNewPostEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                />
            </div>
            <div className="f-item">
                <StyledBtn onClick={addNewPost}>Add</StyledBtn>
            </div>
        </form>
    );
};

export default PostForm;