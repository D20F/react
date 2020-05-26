// import logo from '../../assets/img/logo.svg';
import './Home.css';
import React from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// import ds from '../friend/friend'

import {pursecardFun} from '../../redux/actions'


class App extends React.Component {

  constructor(props) {
      super(props);
  }
  componentDidMount(){
    console.log(this.props)
    console.log(this.props.APP_UI_TREE.SHOW_PURSECARD)
    // let { history } = this.props
    // history.push({pathname: '/'})
  }
  handleAddTodo = () => {
    // dispatches actions to add todo
    this.props.inclick()
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
        {this.props.APP_UI_TREE.SHOW_PURSECARD}
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    inclick: () => dispatch(pursecardFun('CCC')),
  }
}
const mapStateToProps = (state) => {
  return state
}
export default connect( mapStateToProps, mapDispatchToProps)(App)






