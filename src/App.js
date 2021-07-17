import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./components/Main/Main";
import AboutUs from "./components/AboutUs/AboutUs";
import ExamplesOfWork from "./components/ExamplesOfWork/ExamplesOfWork";
import Warranties from "./components/Warranties/Warranties";
import styles from './App.module.css'
import Slider from './components/Slider/Slider'
function App(props) {
  return (
      <BrowserRouter >
          <Nav store={props.store}/>
          <div className={styles.appContent}>
              <Route path='/main'
                     render={() => <Main/> }/>
              <Route path='/aboutUs'
                     render={() => <AboutUs/> }/>
              <Route path='/examplesOfWork'
                     render={() => <ExamplesOfWork/> }/>
              <Route path='/warranties'
                     render={() => <Warranties/> }/>
                            
          </div>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
