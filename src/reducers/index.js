import { recipeReducers } from './recipeReducers';
//reducers
import { combineReducers } from 'redux';
//combine

   export default combineReducers({
  recipe: recipeReducers,
    });
