// import logo from '../../assets/img/logo.svg';
import React from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'




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
    console.log(this.props)
  }

  render() {
      return (
        <div>
          App Container
          <ul>
            
          </ul>
  
        </div>
      )
      
  }
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(App)












