import React, { useState } from "react";

const DropDownField = (props) => {
    const { register, errors } = props
    const options = [
        'Sample 1',
        'Sample 2',
        'Sample 3',
    ]

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault()
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={toggleDropdown}
                className="w-100"
            >
                { props?.selectedOption || "Select option"}
            </button>
            {isOpen && (
                <div className="bg-light">
                    {options.map((option) => (
                        <ul key={option}>
                            <label
                                className="dropdown"
                                htmlFor="dropdown1"
                            >
                                <input
                                    {...register("dropdown1")}
                                    type="radio"
                                    className="mr-2 cursor-pointer"
                                    value={option}
                                />
                                {option}
                            </label>
                        </ul>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropDownField