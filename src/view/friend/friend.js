// import logo from '../../assets/img/logo.svg';
import React from "react";
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        temperature: '',
        statse: '1',
        das: '21',
      };
  }


 
  componentDidMount(){
 
  }

  render() {
      return (
        <div>
          App Container
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Inbox</Link></li>
          </ul>
  
        </div>
      )
      
  }
}
export default App;











