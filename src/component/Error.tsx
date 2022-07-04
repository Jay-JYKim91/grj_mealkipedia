import React from 'react';
import { MdOutlineError } from 'react-icons/md';

const Error: React.FC = () => (
    <div className="text-center py-10">
        <MdOutlineError className="m-auto text-7xl text-orange-500" />
        <p className="mt-4 text-2xl font-body1_font">
            Something&apos;s wrong here....
        </p>
    </div>
);

export default Error;
