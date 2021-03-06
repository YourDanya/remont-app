import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Main from "./components/Main/Main";
import AboutUs from "./components/AboutUs/AboutUs";
import ExamplesOfWork from "./components/ExamplesOfWork/ExamplesOfWork";
import Warranties from "./components/Warranties/Warranties";
import styles from './App.module.css'
import Services from "./components/ourServices/Services";
import ModalRender from "./components/Modal/ModalRender";
function App(props) {

  return (
      <BrowserRouter >
          <Nav store={props.store}/>
          <div className={styles.appContent}>
              {/* <Route path='/main' exact */}
              <Route path='/' exact
                     render={() => <div><Main/><Services />
                            </div> }/>
              <Route path='/aboutUs'
                     render={() => <AboutUs/> }/>
              <Route path='/examplesOfWork'
                     render={() => <ExamplesOfWork/> }/>
              <Route path='/warranties'
                     render={() => <Warranties/> }/>
          </div>
          <Footer/>
          <ModalRender/>
          {/* <Redirect from='/' to='/main'/> */}
      </BrowserRouter>
  );
}

export default App;
