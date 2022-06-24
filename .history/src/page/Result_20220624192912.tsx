import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as apiMeals from '../services/mealDB';
import Tag from '../component/Tag';

const Result: React.FC = () => {
    let { state } = useLocation();

    const { isLoading, isError, data } = useQuery('searchRecipeById', () => apiMeals.searchRecipeById(state as string));
    if (isLoading) {
        return <span>loading...</span>
    }

    if (isError) {
        return <span>Error</span>
    }

    const { strMeal, strArea, strCategory, strTags, strMealThumb, strInstructions } = data;
    const ingredientsArray: string[] = [];

    for(let i = 1; i < 21; i++) {
        const ingredient = `strIngredient${i}`;
        const measure = `strMeasure${i}`;

        if(data[ingredient]) {
            ingredientsArray.push(`${data[measure]} ${data[ingredient]}`)
        }
    }

    console.log(ingredientsArray);

    return (
        <div className="px-6 md:px-9 lg:px-12 my-6">
            <h1 className="font-body1_font text-4xl mb-4">
                {strMeal}
            </h1>
            <div className="flex flex-col lg:flex-row font-body2_font">
                <img src={strMealThumb} alt={strMeal}
                    className="lg:pr-4 max-w-xs max-h-xs" />
                <div>
                    <div className="py-4 flex flex-wrap">
                        <Tag type='category' content={strCategory}/>
                        <Tag type='area' content={strArea}/>
                        {strTags && strTags.split(',').map((tag: string) => {
                            if (tag !== '') {
                                return <Tag type='restTag' content={tag} />
                            }
                        })}
                    </div>
                    
                    <p>Ingredients</p>
                    {
                        ingredientsArray.map((ingredient) => 
                            <p>{ingredient}</p>
                        )
                    }
                    <p>Instructions</p>
                    {/* {(strInstructions.split(' ').length >= MAX_WORDS) ? 
                        <p>{strInstructions.split(' ').slice(0, MAX_WORDS).join(' ') + ' ...'}</p>
                        :
                        <p>{strInstructions}</p>} */}
                    <p>{strInstructions}</p>
                    <p>"1. Preheat oven to 425 degrees. Wash and dry all produce. Dice potatoes into 1/2-inch pieces. Trim, peel, and cut carrots on a diagonal into 1/2-inch-thick pieces. Trim and thinly slice scallions, separating whites from greens; finely chop whites. Peel and finely chop garlic.\r\n\r\n2. In a medium bowl, soak bread with 2 TBSP water (4 TBSP for 4 servings); break up with your hands until pasty. Stir in beef, sriracha, scallion whites, half the garlic, salt (we used 3/4 tsp kosher salt; 11/2 tsp for 4), and pepper. Form into two 1-inch-tall loaves (four loaves for 4). Place on one side of a baking sheet. Toss carrots on empty side of same sheet with a drizzle of oil, salt, and pepper. (For 4, spread meatloaves out across whole sheet and add carrots to a second sheet.) Bake for 20 minutes (we'll glaze the meatloaves then).\r\n\r\n3. Meanwhile, place potatoes in a medium pot with enough salted water to cover by 2 inches. Bring to a boil and cook until very\r\ntender, 12-15 minutes. Reserve 1/2 cup potato cooking liquid, then drain. While potatoes cook, in a small bowl, combine soy sauce, garlic powder, 1/4 cup ketchup (1/2 cup for 4 servings), and 2 tsp sugar (4 tsp for 4).\r\n\r\n4. Once meatloaves and carrots have baked 20 minutes, remove from oven. Spoon half the ketchup glaze over meatloaves (save\r\nthe rest for serving); return to oven until carrots are browned and tender, meatloaves are cooked through, and glaze is tacky, 4-5 minutes more.\r\n\r\n5. Meanwhile, melt 2 TBSP butter (4 TBSP for 4 servings) in pot used for potatoes over medium heat. Add remaining garlic and cook\r\nuntil fragrant, 30 seconds. Add potatoes and 1/4 tsp wasabi. Mash, adding splashes of reserved potato cooking liquid as necessary until smooth. Season with salt and pepper. (If you like things spicy, stir in more wasabi!)\r\n\r\n6. Divide meatloaves, mashed potatoes, and roasted carrots between plates. Sprinkle with scallion greens and serve with remaining ketchup glaze on the side for dipping."</p>
                </div>
            </div>
        </div>
    )
}

export default Result;