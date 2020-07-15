// import logo from '../../assets/img/logo.svg';
import React from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'



class App extends React.Component {
  constructor (props) {
      super(props)
      this.state = {
          name: '',
          count: 0,
          flag: true
      }
      this.nameInputRef = React.createRef() // 创建 ref
      this.fileInputRef = React.createRef() // 创建 ref
  }
  render () {
      return (
          <div>
              {/* 这里使用 defaultValue 而不是value，使用 ref */}
              <input defaultValue={this.state.name} ref={this.nameInputRef} />
              <button onClick={this.alertName.bind(this)}>alert value</button>
              {/* file 类型的必须用 ref 获取 dom 来获取数据 */}
              <input type="file" ref={this.fileInputRef} />
              
              
          </div>
      )
  }
  alertName () {
    const ele = this.nameInputRef.current // 通过 ref 获取 dom 节点
    this.setState({count:this.state.count + 1});
    console.log('1',this.state.count)
    this.setState({count:this.state.count + 1});
    console.log('2',this.state.count)
    setTimeout(() => {
      console.log('3',this.state.count)
      this.setState({count:this.state.count + 1});
      console.log('33',this.state.count)
    }, 1000);
    setTimeout(() => {
      console.log('4',this.state.count)
      this.setState({count:this.state.count + 1});
      console.log('44',this.state.count)
    }, 1000);
    this.setState({count:this.state.count + 1});
    console.log('5',this.state.count)
  }
}



const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(App)












