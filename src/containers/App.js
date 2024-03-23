import { RecipeHeader, SearchRecipe, Recipes } from '../components';
//components
import { bindActionCreators } from 'redux'; //creators
import React, { Component } from 'react'; //components
import { Grid, Row, Col } from 'react-bootstrap'; //done
import { connect } from 'react-redux';
//connect
import { updateRecipeName, updateRecipes } from '../actions';
//updates


class App extends Component { //app class
  //recipe name change
  handleRecipeNameChange = (recipeName) => { this.props.updateRecipeName(recipeName);
  }
  handleRecipeSubmit = () => {
    //submit
    const api = `http://yumtumrecipe-api.edmama.com/api/v2/recipes/?q=${this.props.recipeName}`;

    // fetch the recipe api
    fetch(api, {
      method: 'GET', //get method
    }) 

      .then(response => response.json())
//okk tested
      .then(json => {
            this.props.updateRecipes(json.results);
            //res
      })
      .catch((error) => {
        //error
        console.log('Error in fetching data');
        //error loading data
      });
  }

  render() {
    {
    //console
      console.log(this.props.recipes);
    }
    return (
      <div>   <RecipeHeader />
        <Grid> <Row>  <Col md={12} xs={12} sm={12}>
              <SearchRecipe
      handleRecipeSubmit={this.handleRecipeSubmit}  handleRecipeNameChange={this.handleRecipeNameChange}
      />
            </Col> </Row>
          <Row>
            <Col md={12} xs={12} sm={12}>
              {
      this.props.recipes !== undefined ? <Recipes recipes={this.props.recipes} /> : <div></div>
      }
            </Col> </Row></Grid></div>
    )
  }
}
function mapDispatchToProps(dispatch) { return bindActionCreators({
  updateRecipes: updateRecipes,
  updateRecipeName: updateRecipeName
}, dispatch);
}
function mapStateToProps(state) { return {
    recipes: state.recipe.recipes,
    recipeName: state.recipe.recipeName
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
