import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./page/home";
import Recipe from "./page/recipe";
import Search from "./page/search";
import * as apiMeals from "./services/mealDB";

type Load = "Success" | "Fail" | "Loading";

const App: React.FC = () => {
  const [defaultRecipe, setDefaultRecipe] = useState<apiMeals.RecipeType>({
    id: "",
    title: "",
    imageURL: "",
    area: "",
    tags: [],
    instruction: "",
  });

  const [recipes, setRecipes] = useState([]);

  const onSearch = (query: string) => {
    apiMeals.searchRecipe(query).then((data) => {
      setRecipes(data);
    });

    console.log(recipes);
  };

  const [data, setData] = useState();
  const [load, setLoad] = useState<Load>("Loading");

  useEffect(() => {
    apiMeals.fetchRandomRecipe({ setData, setLoad }).then((data) => {
      data = data! as apiMeals.RecipeType;

      setDefaultRecipe({
        id: data.id,
        title: data.title,
        imageURL: data.imageURL,
        area: data.area,
        tags: data.tags,
        instruction: data.instruction,
      });
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          {/* {
            load ? "Succ"~~~ "fa":에러가발생했습니다.
          } */}
          <Route
            path="/"
            element={
              <Home
                title={defaultRecipe.title}
                imageURL={defaultRecipe.imageURL}
                area={defaultRecipe.area}
                tags={defaultRecipe.tags}
                instruction={defaultRecipe.instruction}
                id={defaultRecipe.id}
                onSearch={onSearch}
              />
            }
          />
          <Route
            path="search"
            element={
              <Search
                onSearch={onSearch}
                title={defaultRecipe.title}
                imageURL={defaultRecipe.imageURL}
                area={defaultRecipe.area}
                tags={defaultRecipe.tags}
                instruction={defaultRecipe.instruction}
                id={defaultRecipe.id}
              />
            }
          />
          <Route path="recipe" element={<Recipe />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
