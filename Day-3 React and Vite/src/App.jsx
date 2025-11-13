import React from "react";
import Header from "./components/Header"
import Body from './components/Body';


const App = () => {
  return <div id="app" className="app">
            <Header/>
            <Body/>
        </div>;
};

export default App;


/**
 *  main (index.css) 
 *     - App
 *         - Header
 *               - Logo
 *               - Navbar
 *          - Body
 *              - Parent
 *                  - child
 * 
 */

