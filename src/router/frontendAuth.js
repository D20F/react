import * as React from 'react';
import { Route,Redirect } from 'react-router-dom';
import { propsModel } from './frontend-auth.model'
 
export class FrontendAuth extends React.Component{
    render(){
        // const { location,config } = this.props;
        // const { pathname } = location;
        // const isLogin = localStorage.getItem('__config_center_token')
        

 
        // if(isLogin){
        //     if(pathname === '/login'){
        //         return <Redirect to='/' />
        //     }else{
        //         if(targetRouterConfig){
        //             return <Route path={pathname} component={targetRouterConfig.component} />
        //         }else{
        //             return <Redirect to='/404' />
        //         }
        //     }
        // }else{
        //     if(targetRouterConfig && targetRouterConfig.auth){
        //         return <Redirect to='/login' />
        //     }else{
        //         return <Redirect to='/404' />
        //     }
        // }

        console.log(111111111111111)

    }
}