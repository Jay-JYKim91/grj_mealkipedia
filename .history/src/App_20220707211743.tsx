import React, { useState } from 'react';
import { Route, Routes, NavigateFunction, useNavigate } from 'react-router-dom';
import Home from './page/Home';
import Result from './page/Result';
import Search from './page/Search';

const App: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    const [a, setA] = useState('');
    // const [b, setB] = useState('');

    const onSubmit = () => {
        console.log(a);
    };

    return (
        <div className="app">
            <div>
                <form onSubmit={onSubmit}>
                    <input 
                        type="text"
                        value={a}
                        onChange={(event) => setA(event.target.value)}
                    />
                </form>
            </div>
            <header className="px-6 md:px-9 lg:px-12 py-2 shadow-md bg-gray-50">
                <div className="max-w-7xl m-auto text-center md:text-left">
                    <button type="button" onClick={navigateHome}>
                        <img src="/logo.png" alt="logo" width="160" />
                    </button>
                </div>
            </header>
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="result" element={<Result />} />
                </Routes>
            </main>
            <footer className="flex flex-col items-center justify-center px-12 py-4 bg-gray-400">
                <img src="/logo.png" alt="logo" width="100" className="mb-2" />
                <p className="font-body2_font">
                    Developed by&nbsp;
                    <a
                        href="https://github.com/Jay-JYKim91/grj_mealkipedia"
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer hover:underline hover:decoration-solid hover:decoration-2"
                    >
                        Juyeon Kim
                    </a>
                </p>
                <p>
                    Using&nbsp;
                    <a
                        href="https://www.themealdb.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer hover:underline hover:decoration-solid hover:decoration-2"
                    >
                        TheMealDB
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default App;
