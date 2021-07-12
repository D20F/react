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
                                        routerConfig.map(({ children, path, component, title }) => {
                                            if (children) {
                                                return (
                                                    <Switch key={title}>
                                                        {
                                                            children.map(({ path, component, title }) => {
                                                                return <Route path={path} component={component} key={title} />
                                                            })
                                                        }
                                                    </Switch>
                                                );
                                            } else {
                                                return <Route path={path} component={component} key={title} />
                                            }
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


