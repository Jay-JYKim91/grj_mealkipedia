import React from 'react';

const Home = () => {
    console.log(React);

    return (
        <section className="px-12 py-40 bg-cover bg-[url('images/main_background.jpg')] text-right">
            <h1 className="font-body1_font text-7xl mb-8">Find a Recipe</h1>
            <input type="search" className="text-5xl" />
        </section>

    )
};

export default Home;