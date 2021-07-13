import logo from '../../assets/logo.svg';
import './index.css';

import { useHistory, useLocation, useParams, useRouteMatch, } from "react-router-dom";


function Login() {
    // 获取 history 对象
    const history = useHistory();
    // 获得当前路径
 	const {pathname} = useLocation();
	 // 获得当前参数
 	let { slug } = useParams();
    console.log(history)
    function Jump(params) {
        console.log(params)
        history.push("/home");
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a onClick={()=>{ Jump(78)} }>
                    Edit
        </a>
            </header>
        </div>
    );
}

export default Login;
