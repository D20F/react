// import logo from '../../assets/img/logo.svg';
import './Home.css';
import React from "react";
import ReactDOM from 'react-dom';
import ds from '../friend/friend'

import { Link } from 'react-router-dom'


class App extends React.Component {

  constructor(props) {
      super(props);
  }
  componentDidMount(){
    console.log(this.props)
    // console.log(this.props.match.params)

    // window.history.pushState('','',"/about:{sada:sadada}");
    // let { history } = this.props
    // history.push({pathname: '/'})
  }
  render() {
      return (
        <div>
          
          {/* <p onClick={()=>{history.pushState('/about/')}}>App Container</p> */}
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Inbox</Link></li>
          </ul>
  
        </div>
      )
      
  }
}
export default App;










