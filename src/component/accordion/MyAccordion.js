import React from 'react';

const MyAccordion = ({ onToggle, active, currElm }) => {
    const { question, answer } = currElm;
    return <>
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className={ active ? "accordion-button" : "accordion-button collapsed"} 
                type="button" 
                onClick={onToggle}>
                    {question}
                </button>
            </h2>
            {
                active && 
                <div className="accordion-collapse">
                    <div className="accordion-body">
                        {answer}
                    </div>
                </div>
            }

        </div>
    </>
}

export default MyAccordion;
