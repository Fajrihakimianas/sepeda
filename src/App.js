import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import "./Assets/scss/style.scss";
import Admin from './Page/Admin';
import MyOrder from './Page/MyOrder';
import Product from './Page/Product';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Product}/>
      <Route exact path="/order" component={MyOrder}/>
      <Route path="/admin" component={Admin}/>
    </Router>
  )
}
