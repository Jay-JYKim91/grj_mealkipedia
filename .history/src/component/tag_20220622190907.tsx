import React from 'react';

type TagProps = {
    type: string;
}

const Tag: React.FC<TagProps> = ({ type }) => {
    console.log(type);
    
    return(
        <span
            className="p-2 py-px mb-1 border-2 rounded-3xl
            border-lime-300 bg-lime-300 text-lime-700">
                American
        </span>
    )
}

export default Tag;