import '../style.css';
import { Navbar, Header, Brand } from 'react-bootstrap';
import React from 'react';

const RecipeHeader = () => (
  <Navbar> <Navbar.Header> <Navbar.Brand>
           <a href="#">
              <img src="images/recipe-logo.jpeg" id="logo"
  />         YumTum Recipe Finder
          </a>
  
      </Navbar.Brand> </Navbar.Header>   </Navbar>
//done the image
);

export default RecipeHeader;
