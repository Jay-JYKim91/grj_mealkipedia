import React from 'react';

type TagProps = {
    type: string;
    content: string;
}

const CategoryTag = ({ content }) => {
    return (
        <span
            className={
                "p-2 py-px mb-1 border-2 rounded-3xl border-indigo-300 bg-indigo-300 text-indigo-700"
            }
        >
            {content}
        </span>
    )
}

const AreaTag = ({ content }) => {
    return (
        <span
            className={
                "p-2 py-px mb-1 border-2 rounded-3xl border-lime-300 bg-lime-300 text-lime-700"
            }
        >
            {content}
        </span>
    )
}

const RestTag = ({ content }) => {
    return (
        <span
            className={
                "p-2 py-px mb-1 border-2 rounded-3xl border-orange-300 bg-orange-300 text-orange-700"
            }
        >
            {content}
        </span>
    )
}

const checkType = (type: string, content: string) => {
    switch(type) {
        case 'category':
            return <CategoryTag content={content} />;
        case 'area':
            return <AreaTag content={content} />;
        case 'restTag':
            return <RestTag content={content} />;
        default:
            return null;
    }
        
}

const Tag: React.FC<TagProps> = ({ type, content }) => {
    return(
        <>
            {
                checkType(type, content);
            }
        </>
        // <span className={style}>
        //         {content}
        // </span>
    )
}

export default Tag;