import React from 'react';

type TagProps = {
    type?: string;
    content: string;
}
console.log('')
const CategoryTag = (props: TagProps) => {
    return (
        <span
            className={
                "p-2 py-px mb-2 mr-2 border-2 rounded-3xl font-body2_font border-indigo-300 bg-indigo-300 text-indigo-700"
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
                "p-2 py-px mb-2 mr-2 border-2 rounded-3xl font-body2_font border-lime-300 bg-lime-300 text-lime-700"
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
                "p-2 py-px mb-2 mr-2 border-2 rounded-3xl font-body2_font border-yellow-300 bg-yellow-300 text-yellow-700"
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
            { checkType(type, content) }
        </>
    )
}

export default Tag;
