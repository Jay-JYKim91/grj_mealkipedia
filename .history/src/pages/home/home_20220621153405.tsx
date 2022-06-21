import React from 'react';

const Home: React.FC = () => {

    return (
        <section className="px-12 py-40 bg-cover bg-[url('images/main_background.jpg')] text-right">
            <h1 className="font-body1_font text-7xl mb-8">Find a Recipe</h1>
            <button className="flex justify-end">
                <img src="./search.png" alt="search" className="p-4" />
                <input type="search" className="p-4 text-3xl font-body1_font" />
            </ㅠ>
        </section>

    )
};

export default Home;