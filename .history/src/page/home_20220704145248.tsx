import React from 'react'
import TodaysRecipe from '../component/TodaysRecipe'
import SearchBar from '../component/SearchBar'

const Home: React.FC = () => {
    return (
        <>
            <div className="px-6 md:px-9 lg:px-12 py-40 bg-cover bg-[url('images/main_background.jpg')] text-center lg:text-right">
                <div className="max-w-7xl m-auto">
                    <h1 className="font-body1_font text-5xl lg:text-7xl mb-8 drop-shadow-[2.5px_2.5px_0.5px_rgba(255,255,255,0.8)]">
                        Find a Recipe!
                    </h1>
                    <SearchBar divStyle="flex justify-center lg:justify-end" 
                    inputStyle="p-2 lg:p-4 w-full text-2xl font-body1_font rounded-l-lg border-2 border-gray-300" 
                    imageStyle="max-h-[40px]" 
                    buttonStyle="p-2 bg-gray-300 rounded-r-lg" />
                </div>
            </div>
            <TodaysRecipe divStyle="px-6 md:px-9 lg:px-12 xl:px-0 py-6 lg:py-12 max-w-7xl m-auto" />
        </>
    )
}

export default Home
