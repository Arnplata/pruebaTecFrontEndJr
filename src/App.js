import './App.css';
import React, { Fragment, useEffect } from 'react';
import ListContainer from './components/ListContainer';

function App() {
  
    return (
    <Fragment>
      <div className="header"><h1>Prueba Técnica</h1></div>

      <div className="bdyWrapper">
      <div className="appWrapper">
        <div className="listaHeader">
          <h2>Lista de tareas</h2>
          <h3>Props + Hooks</h3>
        </div>
        <ListContainer/>
      </div>


      {/* <div className="appWrapper">
        <div className="listaHeader">
          <h2>Lista de tareas</h2>
          <h3>Redux</h3>
        </div>
        <ListContainer/>
      </div> */}
      </div>

      
      
    </Fragment>
  );
}

export default App;
