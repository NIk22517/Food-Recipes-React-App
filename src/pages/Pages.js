import React from 'react';
import Home from './Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipes from './Recipes';
import { AnimatePresence } from 'framer-motion'

const Pages = () => {

  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={ <Home /> } />
        <Route exact path='/cuisine/:type' element={ <Cuisine /> } />
        <Route exact path='/serached/:search' element={ <Searched /> } />
        <Route exact path='/recipe/:name' element={ <Recipes /> } />


    </Routes>

    </AnimatePresence>
  )
}

export default Pages