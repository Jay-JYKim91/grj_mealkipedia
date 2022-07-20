import React from 'react';
import { useNavigate } from 'react-router-dom';

type TagProps = {
    type?: string;
    content: string;
    clickable?: boolean;
};

const CategoryTag = ({ content, clickable }: TagProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (clickable) {
            navigate('/category', {
                state: content,
            });
        }
    };

    return (
        <span
            className="p-2 py-px mb-2 mr-2 border-2 rounded-3xl font-body2_font border-indigo-300 bg-indigo-300 text-indigo-700"
            onClick={handleClick}
        >
            {content}
        </span>
    );
};

const AreaTag = ({ content }: TagProps) => (
    <span className="p-2 py-px mb-2 mr-2 border-2 rounded-3xl font-body2_font border-lime-300 bg-lime-300 text-lime-700">
        {content}
    </span>
);

const RestTag = ({ content }: TagProps) => (
    <span className="p-2 py-px mb-2 mr-2 border-2 rounded-3xl font-body2_font border-yellow-300 bg-yellow-300 text-yellow-700">
        {content}
    </span>
);

const checkType = (type: string, content: string, clickable: boolean) => {
    switch (type) {
        case 'category':
            return <CategoryTag content={content} clickable={clickable} />;
        case 'area':
            return <AreaTag content={content} />;
        case 'restTag':
            return <RestTag content={content} />;
        default:
            return null;
    }
};

const Tag: React.FC<TagProps> = ({ type, content, clickable }) => {
    type = type!;
    clickable = clickable!;

    return <div>{checkType(type, content, clickable)}</div>;
};

export default Tag;
