import React, {useState} from 'react';
import StyledInput from "../common/Input/StyledInput";
import MySelect from "../common/MySelect/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className="form-style">
            <div className="f-item search-wrapper">
                <div className="f-item-title b-title bt12 color4">Name</div>
                <StyledInput
                    type="text"
                    placeholder="Search by name"
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                />
            </div>
            <div className="f-item select-wrapper">
                <div className="f-item-title b-title bt12 color4">Sort By</div>
                <MySelect
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue="Select sort"
                    options={[
                        {value: 'name', name: 'Name'},
                        {value: 'created', name: 'Date of birth'},
                        {value: 'country', name: 'Country'}
                    ]}
                />
            </div>
        </div>
    );
};

export default PostFilter;