import React,{useState, useEffect} from 'react';
import Recipe from './Recipe'
import './App.css';

const App=()=>{

  const APP_ID='b63a8b71';
  const APP_KEY='3d978402d901ac9f993ebc4935de9ca5';

  const [recipes, setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken');  

  useEffect(()=>{
    getRecipes();
  },[query])

  const getRecipes= async ()=>{
    
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();      
    setRecipes(data.hits)    
    
  }

  const updateSearch=e=>{
    setSearch(e.target.value)
  }

  const getSearch=e=>{
    e.preventDefault()
    setQuery(search)
    setSearch('')    
  }

  return (
    <div className="App"> 

      <div class="head">DAD'S KITCHEN</div>

      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} placeholder='Enter the type of dish' onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>                    
      </form>

      <div className="container">
        <div className="card-deck">
        {recipes.map(recipe=>(
          <Recipe key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
        </div>
      </div>
    </div>
  )
}

export default App;
