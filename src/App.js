import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product'
class App extends Component{
  onAdd = ()=> {
    console.log(this.refs.productName.value);
    }
  render(){
    return(
    <div className="App">

     
      <Header/>
      
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        

        
          <div className="form-group">
            <label for="">tên</label>
            <input type="text" class="form-control" ref="productName"/>
          </div>
        
             <button type="submit" className="btn btn-primary" onClick={this.onAdd}>add</button>

        
      </div>
      
      <Product name="iphone 8" price="5.000.0000"/>
    </div>
    );
}}

export default App;
