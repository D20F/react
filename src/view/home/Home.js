// import logo from '../../assets/img/logo.svg';
import './Home.scss';
import React from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// import ds from '../friend/friend'

import {pursecardFun} from '../../redux/actions'
import { Button, DatePicker, version } from "antd";

class App extends React.Component {

  constructor(props) {
      super(props);
  }
  componentDidMount(){
    console.log(this.props)
    console.log(this.props.APP_UI_TREE.SHOW_PURSECARD)
    // let { history } = this.props
    // history.push({pathname: '/about'})
  }
  handleAddTodo = () => {
    // dispatches actions to add todo
    this.props.inclick('saafafasacsaca')
    console.log(this.props)
    console.log(this.props.APP_UI_TREE.SHOW_PURSECARD)
    setTimeout(() => {
      console.log(this.props.APP_UI_TREE.SHOW_PURSECARD)
          let { history } = this.props
    history.push({pathname: '/about'})
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        <h1>antd version: {version}</h1>
        <p onClick={this.handleAddTodo} className='ppp'>asdafsafa</p>
        <div className='ccc'>
          <p >asdafsafa</p>
        </div>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    inclick: (data) => dispatch(pursecardFun(data)),
  }
}
const mapStateToProps = (state) => {
  return state
}
export default connect( mapStateToProps, mapDispatchToProps)(App)






