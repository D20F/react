import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './view/home/Home';




// ReactDOM.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const About = () => <h2>页面一</h2>;
const Users = () => <h2>页面二</h2>;

ReactDOM.render(
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
            </Switch>
        </Router>
, document.getElementById('root'));
