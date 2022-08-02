import React from "react";
import "./recipes.css";
import { Button } from "@mui/material";

const recipes = ({ title, image, ingredients, url }) => {
  return (
    <div className='container'>
      <h1>{title}</h1>

      <img src={image} alt='' />
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>

      <a href={url}>
        <Button variant='contained' color='primary' component='span'>
          Instructions
        </Button>
      </a>
    </div>
  );
};

export default recipes;
