import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product'
function App() {
  return (
    <div className="App">
      <Header/>
      <Product name="iphone 8" price="5.000.0000"/>
    </div>
  );
}

export default App;
