
// react 
import React from 'react';
import ReactDOM from 'react-dom';

// router
import { BrowserRouter as Router, BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './redux/reducers'

// 全局导入antdcss
import 'antd/dist/antd.css';
import './index.css';

// 组件
import Home from './view/home/Home';
import friend from './view/friend/friend';

// thunk中间件使用
const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
// 创建store
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route render={({ location }) => (
                // <TransitionGroup >
                //     <CSSTransition
                //     key={location.pathname}
                //     appear={true}
                //     classNames="item"
                //     timeout={1000}
                //     unmountOnExit={true}
                // >
                <Switch location={location} >
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={friend} />
                </Switch>
                //     </CSSTransition>
                // </TransitionGroup>
            )} />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));




