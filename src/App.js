import React from 'react';
import Routes from './router';
import './App.css';
import AppProviders from './context';

function App() {
  console.log("Mirror should Work");
  return (
    <AppProviders>
      <Routes/>
    </AppProviders>
  );
}

export default App;