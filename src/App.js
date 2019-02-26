import React, { Component } from 'react';
import './App.css';
import Form from './components/form'
import Recipes from './components/recipes'


const API_KEY = "c7ece5d9a180711771594a3cd310e69f";

class App extends Component {

  state = {
    recipes: [],
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=25`);
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }

  render() {
    return (
      <div className="App">
        <header className = "App-header">
          <h1 className = "App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
