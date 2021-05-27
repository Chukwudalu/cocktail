import React from 'react'
import { GlobalStyles } from './components/globalStyles'
import Header from './components/header'
import Home from './pages/home';
import Detail from './components/detail'
import Footer from './components/footer';
import { Switch, Route } from 'react-router-dom'




function App() {

  return (
    <div className="App">
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/cocktail/:id' component={Detail}/>
        </Switch>
        <Footer/>
    </div>
    
    
  );
}

export default App;