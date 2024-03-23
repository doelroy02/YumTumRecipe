import { UPDATE_RECIPE_NAME } from '../constants';

export function recipeReducers(state = {
  //name
    recipeName: '', //recipe
    recipes: []
    //list
  }, action) { //action of the same
  switch (action.type) { //test
    //update

    case UPDATE_RECIPE_NAME: //update

    //name recipe
      const recipeName = action.payload; 

      //return
      return {
        recipeName: recipeName
      }
      break;

      //update 
    case 'UPDATE_RECIPES':

    //return
      return {
        recipes: action.payload
      }
      break;
    default:
  }
  return state;
}
