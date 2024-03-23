import { UPDATE_RECIPE_NAME } from '../constants';

//update recipe
export function updateRecipes(recipes) {return {
  'payload': recipes,
    'type': 'UPDATE_RECIPES'}
}
//update recipe name
export function updateRecipeName(recipeName) {
  return {
    'payload': recipeName,
    'type': UPDATE_RECIPE_NAME }
}