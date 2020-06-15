import React from 'react';
import './App.scss';
import styled from 'styled-components';
import logo from './logo.svg';

const Button = styled.button`
  font-size: 1.5em;
  color: teal;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button>click</Button>
      </header>
    </div>
  );
}

export default App;
