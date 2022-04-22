import React from 'react';

const StyledInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props}/>
    );
});

export default StyledInput;