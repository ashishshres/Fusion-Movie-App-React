import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ title, options, func }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    const handleSelection = (option) => {
        setIsOpen(false);
        func(option.toLowerCase());
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div>
            <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="text-zinc-200 bg-zinc-800 px-4 py-2 rounded-md flex items-center font-medium text-sm w-28"
                type="button"
            >
                {title}
                <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    id="dropdown"
                    ref={dropdownRef}
                    className="mt-1 divide-y divide-gray-100 rounded-lg shadow w-28 bg-zinc-700/50 backdrop-blur-md absolute"
                >
                    <ul
                        className="py-2 text-sm text-gray-200 font-medium"
                        aria-labelledby="dropdownDefaultButton"
                    >
                        {options.map((option, i) => (
                            <li
                                key={i}
                                onClick={() => handleSelection(option)}
                                className="block px-4 py-2 hover:bg-zinc-700 cursor-pointer"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
