import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router';


class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {


        }
    }



    render() {
        return(
            <>
            <h3>hello</h3>

            <Switch>
                <Route path='/home' ></Route>
                <Route path='/portfolio' ></Route>
                <Route path='/development' ></Route>
                <Route path='/fulfillment' ></Route>
                <Route to='/connect' ></Route>
                <Redirect to='/home' ></Redirect>
            </Switch>
            </>
        )
    }
}

export default Main;