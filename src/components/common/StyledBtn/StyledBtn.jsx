import React from 'react';

const StyledBtn = ({children, ...props}) => {
    return (
        <button {...props} className="styled-btn styled-btn-1">{children}</button>
    );
};

export default StyledBtn;