// import logo from '../../assets/img/logo.svg';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'


import './friend.scss'

function Mouse() {
    const [count, setCount] = useState(0);
    const [mount, setMount] = useState(0);
    useEffect(() => {
        console.log(count)
        return () => {
            console.log(1)
        }
    },[])


    return (
        <div className={'ppp'} onClick={()=>{setCount(count + 1)}}>
            mouse
            { count}
        </div>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            count: 0,
            flag: true
        }
        this.nameInputRef = React.createRef() // 创建 ref
        this.fileInputRef = React.createRef() // 创建 ref
        console.log(this.props)
        console.log(this.props.history.push)
    }
    render() {
        return (
            <div>
                {/* 这里使用 defaultValue 而不是value，使用 ref */}
                <input defaultValue={this.state.name} ref={this.nameInputRef} />
                <button onClick={this.alertName}>alert value</button>
                {/* file 类型的必须用 ref 获取 dom 来获取数据 */}
                <input type="file" ref={this.fileInputRef} />



                <Mouse />



            </div>
        )
    }
    alertName = () => {
        const ele = this.nameInputRef.current // 通过 ref 获取 dom 节点
        console.log(ele)
        console.log(this.nameInputRef)

        this.setState({ count: this.state.count + 1 });

    }
}



const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(App)












