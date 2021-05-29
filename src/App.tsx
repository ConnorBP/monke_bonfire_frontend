import React from 'react';
import { Typography } from '@material-ui/core';

import logo from './logo.svg';
import './App.css';
import { Symfoni } from "./hardhat/SymfoniContext";
import { MonkeBonfire } from './components/MonkeBonfire';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Symfoni autoInit={true} loadingComponent={<h1>LOADING...</h1>} >
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Typography variant="h2" component="h2">
              Monke Bonfire
            </Typography>
            Burn Monke, Earn Naner
          </p>
          <MonkeBonfire></MonkeBonfire>
        </Symfoni>
      </header>
    </div>
  );
}

export default App;
