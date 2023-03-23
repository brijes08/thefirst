import React, { useState } from 'react';

const questions = [
    {
        question: 'What is Vinod',
        answer: 'vinod is a viral name can everyone speaks'
    },
    {
        question: 'What is Vinod',
        answer: 'vinod is a viral name can everyone speaks'
    },
    {
        question: 'What is Vinod',
        answer: 'vinod is a viral name can everyone speaks'
    },
    {
        question: 'What is Vinod',
        answer: 'vinod is a viral name can everyone speaks'
    }
];


const Accordion = () => {
    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    };

    return <>
        <div className="accordion" id="accordionExample">
            {
                questions.map((currElm, index) => {
                    return <div className="accordion-item" key={index} id={index}>
                        <h2 className="accordion-header">
                            <button className={clicked === index ? "accordion-button" : "accordion-button collapsed"}
                                type="button"
                                onClick={() => handleToggle(index)}>
                                {currElm.question}
                            </button>
                        </h2>
                        {
                            clicked === index &&
                            <div className="accordion-collapse">
                                <div className="accordion-body">
                                    {currElm.answer}
                                </div>
                            </div>
                        }

                    </div>
                })
            }
        </div>
    </>
}

export default Accordion;

