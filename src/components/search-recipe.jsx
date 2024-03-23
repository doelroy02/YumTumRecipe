import { Row, Col } from 'react-bootstrap';
//okay its done
import '../style.css'; //css
import React, { Component } from 'react'; 
//react
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
//bootstrap

const SearchRecipe = ({handleRecipeNameChange, handleRecipeSubmit}) => (
  <Row> <Col md={4} sm={4} xs={4}><FormGroup><FormControl
          name="recipeName" //name
             type="text" //text
                onChange={(event) => {
                       handleRecipeNameChange(event.target.value)
          }}
                 className="search-box"
                 //search
          placeholder="Enter recipe name to search"
        />
      </FormGroup> </Col><Col md={4} sm={4} xs={4}>
      <img
        className="btn-menu" src="/images/btn-menu.png" //image
        onClick={() => {
          handleRecipeSubmit()
        }}/>    </Col> </Row>
);

export default SearchRecipe;
