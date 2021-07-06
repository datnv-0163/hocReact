import React,{Component} from 'react';

class Product extends Component {
 render(){
    return (

            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="thumbnail">
                      <img data-src="https://product.hstatic.net/200000144777/product/iphone-12-white-select-2020_8a2226095b48478ca211e2697e1072c9.png" alt=""/>
                    <div className="caption">
                     <h3>{this.props.name}</h3>
                        <p>
                              {this.props.price}
                        </p>
                         <p>
                         <a href="#" className="btn btn-primary">Action</a>
                         <a href="#" className="btn btn-default">Action</a>
                         </p>
                     </div>
                     </div>
            </div>
     );
    }
}

export default Product;
