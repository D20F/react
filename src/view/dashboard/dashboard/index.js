import React from 'react';
import { connect } from 'react-redux'


import './index.scss'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        
    } 


    render() {
        return (
            <div>
                table
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(App)












