import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter, Link} from 'react-router-dom';
import Search from "./components/Search";
import styled from 'styled-components';
import { GiKnifeFork } from  'react-icons/gi'

function App() {
  return (
    <BrowserRouter >
    <Nav>
      <GiKnifeFork />
      <Logo to={'/'} >delicious</Logo>
    </Nav>
    <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

export default App;

const Logo = styled(Link)`
   text-decoration: none;
   font-size: 1.5rem;
   font-weight: 400;
   font-family: 'Lobster two', cursive;
`;

const Nav = styled.div`
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size: 2rem;
  }
`
