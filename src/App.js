import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';


const App = () => {
  return (
   
    <BrowserRouter>
    <Routes>
      <Switch>
      <Route path="/" Component={Home} />
      <Route path="/competences" Component={Knowledges} />
      <Route path="/portfolio" Component={Portfolio} />
      <Route path="/contact" Component={Contact} />
      <Route component={NotFound} />
      </Switch>
      </Routes>
    </BrowserRouter>
   
  );
};

export default App;