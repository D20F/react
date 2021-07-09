import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import routerConfig from './config'

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Route
                    render={({ location }) =>
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={300}
                                classNames="fade"
                            >
                                <Switch location={location} >

                                    {
                                        routerConfig.map((item) => {
                                            return <Route path={item.path} component={item.component} key={item.path} />
                                        })
                                    }

                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    }
                />
            </Router>
        );
    }
}

export default RouterComponent;


