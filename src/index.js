import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './view/home/Home';
import friend from './view/friend/friend';


import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom'



ReactDOM.render(
        <Router>
            <Route render={({ location }) => (               
                <TransitionGroup>
                    <CSSTransition key={location.key} classNames="fade" timeout={300}>
                        <Switch location={location}>
                            <Route path="/" exact component={Home} />
                            <Route path="/about/" component={friend} />
                            <Route path="/users/" component={Users} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup> 
            )}/>
        </Router>
, document.getElementById('root'));
