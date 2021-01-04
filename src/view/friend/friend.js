// import logo from '../../assets/img/logo.svg';
import React from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux'


import './friend.scss'

// function Mouse() {
//     const [count, setCount] = useState(0);
//     const [mount, setMount] = useState(0);
//     useEffect(() => {
//         console.log(count)
//         return () => {
//             console.log(1)
//         }
//     }, [])
//     return (
//         <div className={'ppp'} onClick={() => { setCount(count + 1) }}>
//             mouse
//             { count}
//         </div>
//     );
// }

// 挂载时
// constructor
// getDerivedStateFromProps
// render
// componentDidMount

// 更新时
// getDerivedStateFromProps
// shouldComponentUpdate
// render
// getSnapshotBeforeUpdate
// componentDidUpdate

// 卸载时
// componentWillUnmount


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
        // console.log(this.props.history.location)
        console.log('constructor')
    } 
    static getDerivedStateFromProps(props, state) {
        console.log('%cgetDerivedStateFromProps','color: green;')
        return {}
    }
    shouldComponentUpdate() {
        console.log('%cshouldComponentUpdate','color: green;')
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('%cgetSnapshotBeforeUpdate','color: green;')
        return null;
    }
    componentDidMount() {
        console.log('%ccomponentDidMount','color: red;')
    }
    componentDidUpdate() {
        console.log('%ccomponentDidUpdate','color: red;')
    }
    componentWillUnmount() {
        console.log('%ccomponentWillUnmount','color: red;')
    }
    life = () => {
        let { history } = this.props
        history.push({pathname: '/'})
    }
    alertName = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        console.log('render')
        return (
            <div>

                <p onClick={this.alertName}>alertName</p>
                <p onClick={this.life}>back</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(App)












