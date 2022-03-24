import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components'

const Searched = () => {

    const [searchRecipes, setSearchRecipes] = useState([]);
    let params = useParams();

    useEffect(() => {
        getSearched(params.search);
    },[params.search])

    const getSearched = async (name) => {
        const data = await  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearchRecipes(recipes.results);
    }
  return (
    <Grid>
    {searchRecipes.map((item) => {
        return (
            <Card key={item.id}>
                <Link to={'/recipe/'+item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
                </Link>
            </Card>
        )
    })}
</Grid>
  )
}

export default Searched

const Grid = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
 grid-gap: 3rem;
`;

const Card = styled.div`
  img{
      width: 100%;
      border-radius: 2rem;
  }
  a{
      text-decoration: none;
  }
  h4{
      text-align: center;
      padding: 1rem;
  }
`