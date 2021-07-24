import React, { Component } from "react";
import {
    Router,
    Switch,
    Route,
} from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// key的数据变化 会导致 里面包括的组件重新刷新  --- 不建议使用 


import routerConfig from './config'
import getHistory from './history'
const history = getHistory();

function RouterComponent() {
    return (
        <Router history={history}>
            <Route
                render={({ location }) =>
                    // <TransitionGroup>
                    //     <CSSTransition
                    //         key={location.key}
                    //         timeout={300}
                    //         classNames="fade"
                    //     >
                    <Switch location={location} >
                        {
                            routerConfig.map(({ children, path, component, title }) => {
                                if (children) {
                                    return (
                                        <Switch key={title}>
                                            {
                                                children.map(({ path, component, title }) => {
                                                    return <Route exact={true} path={path} component={component} key={title} />
                                                })
                                            }
                                        </Switch>
                                    );
                                } else {
                                    return <Route exact={true} path={path} component={component} key={title} />
                                }
                            })
                        }
                    </Switch>
                    //    </CSSTransition>
                    //</TransitionGroup>
                }
            />
        </Router>

    )

}

export default RouterComponent;


