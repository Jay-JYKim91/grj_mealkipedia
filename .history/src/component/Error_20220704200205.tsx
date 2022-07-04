import React from 'react';
import { MdOutlineError } from 'react-icons/md';

const Error: React.FC = () => (
    <div className="text-center py-10">
        <MdOutlineError className="m-auto text-7xl text-orange-500" />
        <p className="mt-4 text-3xl">Something&apos;s wrong here....</p>
    </div>
);

export default Error;
