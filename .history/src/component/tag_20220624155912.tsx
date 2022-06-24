import React from 'react';

type TagProps = {
    type?: string;
    content: string;
}

const CategoryTag = (props: TagProps) => {
    return (
        <span
            className={
                "p-2 py-px mb-1 mr-2 border-2 rounded-3xl border-indigo-300 bg-indigo-300 text-indigo-700"
            }
        >
            {props.content}
        </span>
    )
}

const AreaTag = (props: TagProps) => {
    return (
        <span
            className={
                "p-2 py-px mb-1 border-2 rounded-3xl border-lime-300 bg-lime-300 text-lime-700"
            }
        >
            {props.content}
        </span>
    )
}

const RestTag = (props: TagProps) => {
    return (
        <span
            className={
                "p-2 py-px mb-1 border-2 rounded-3xl border-orange-300 bg-orange-300 text-orange-700"
            }
        >
            {props.content}
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
    type = type!;

    return(
        <>
            {
                checkType(type, content)
            }
        </>
    )
}

export default Tag;