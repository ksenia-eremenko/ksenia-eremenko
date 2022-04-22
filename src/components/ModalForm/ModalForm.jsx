import React from 'react';

const ModalForm = ({children, visible, setVisible}) => {

    const rootClasses = ["modal-form-wrapper"]
    if (visible) {
        rootClasses.push("active");
    }

    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className="modal-form-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalForm;