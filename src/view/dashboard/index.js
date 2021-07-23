import React from 'react';


import { trigger } from './index.module.scss'


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }


    render() {
        return (
            <div>
                <div className={trigger}>
                    <p>
                        Dashboard
                    </p>
                </div>
                <div>
                    <p>
                        Dashboard
                    </p>
                </div>
            </div>
        )
    }
}

export default Dashboard












