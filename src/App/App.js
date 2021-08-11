import Header from "../components/header/Header";
import './app.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import Search from "../components/Search/Search";
import Footer from "../components/contents/footer/Footer";

function App() {
  return (
    (<Router>
  <div className="app">
      
      <Header  />
      <Switch>
        < Route path="/" exact component={HomePage}/>
      </Switch>
      <Search/>
      <Footer/>
    </div>
    </Router>
  
  )
  );
}

export default App;
