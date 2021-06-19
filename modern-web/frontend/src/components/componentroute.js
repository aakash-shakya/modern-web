import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import postData from './postData';
import FetchData from './fetchdata'

class RouteComponent extends Component{
    render(){
        return(
        <div>
            <Router>
                <ul>
                    <li><Link to="/">Post Data</Link></li>
                    <li><Link to="/post">Post</Link></li>
                </ul>

                <Switch>
                    <Route exact path="/" component={FetchData}/>
                    <Route path="/post" component={postData}/>
                </Switch>
            </Router>
        </div>
        )
    }
}


export default RouteComponent;