import React, { useState } from "react"

const AccordionOpen = ({title, content, }) => {
    const [isActive, setIsActive] = useState(true);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default AccordionOpen;