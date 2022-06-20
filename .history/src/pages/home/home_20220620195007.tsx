import React from 'react';

const Home = () => {
    console.log(React);

    return (
        <section className="p-10 bg-cover bg-[url('images/main_background.jpg')]">
            <h1 className="font-body1_font text-7xl text-right p-10">Find a Recipe</h1>
            <input type="search"/>
        </section>
    )
};

export default Home;