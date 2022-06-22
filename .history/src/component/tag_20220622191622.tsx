import React from 'react';

type TagProps = {
    type: string;
    content: string;
}

const Tag: React.FC<TagProps> = ({ type, content }) => {
    let style: string = '';

    switch (type) {
        case 'area':
            style = "p-2 py-px mb-1 border-2 rounded-3xl border-lime-300 bg-lime-300 text-lime-700"
            break;
        default:
            
    }
    
    return(
        <span
            className={style}>
                {content}
        </span>
    )
}

export default Tag;