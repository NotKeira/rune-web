import React, {ReactNode, useState} from 'react';

export default (x: {
    children: undefined | ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (<div className="relative inline-block text-left">
        <div>
            <button
                type="button"
                onClick={toggleDropdown}
                className={`rounded-md border border-gray-300 shadow-sm py-2 px-4  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none`}
                id="options-menu"
                aria-haspopup="listbox"
                aria-expanded="true"
            >
                {isOpen ? (<img src="/cdn/images/server/icons/svgs/chevron-up.svg" alt="Chevron Up"
                                className={`w-5`}/>) : (
                    <img src="/cdn/images/server/icons/svgs/chevron-down.svg" alt="Chevron Down"
                         className="m-auto items-center justify-center w-5"/>)}
            </button>
        </div>

        {isOpen && (<div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
        >
            <div className="py-1" role="none">
                {x.children}
            </div>
        </div>)}
    </div>);
}
