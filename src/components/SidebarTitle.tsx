import React from 'react';

export default function SidebarSection({title, children, show}) {
    return (
        <div>
            {show === true && <div className="text-gray-500 text-sm mt-4 ml-3">{title}</div>}
            <div className="mt-2">{children}</div>
        </div>
    );
}