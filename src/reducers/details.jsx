import { View, Text} from 'react-native';
import { RecipeHeader, SearchRecipe, Recipes } from '../components';
import React, { useState, useEffect } from 'react';

// Constants for API 
//api key
const API_KEY = "806c5e6ba442bc3708ea1db4fce3e92d";
//api id
const API_ID = "5b24692a";
const App = ({ recipeName, recipes, updateRecipes }) => {
  const [isLoading, setIsLoading] = useState(false);

  //effect
  useEffect(() => {
      if (!recipeName) return;
    const fetchRecipes = async () => {

          setIsLoading(true);
//loading
           try {
        const response = await fetch(`http://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
        );
     //dome
        const json = await response.json();
//json
//update      
updateRecipes(json.results);

      } catch (error) {    console.error('Error fetching data:', error);
      } finally {    setIsLoading(false);
      }
    };

    //fetch
      fetchRecipes();
  }, [recipeName]);


  return (   <View style={{ flex: 12, padding: 22 }}>
      <RecipeHeader /> <View style={{ marginTop: 30 }}>
        <SearchRecipe
          handleRecipeSubmit={handleRecipeSubmit}          handleRecipeNameChange={handleRecipeNameChange}
        />
      </View>
      <View style={{ marginTop: 20 }}>  {isLoading ? (
          <Text>Still Loading...</Text>
        ) : ( <Recipes recipes={recipes} />
        )}
      </View>   </View> );};
