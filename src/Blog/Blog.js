import React, { Component } from 'react';
import { Switch, NavLink, Route, Redirect } from 'react-router-dom';
import './Blog.css';
import Courses from '../containers/Courses/Courses';
import Users from '../containers/Users/Users';
import NoMatch from '../component/NoMatch/NoMatch';

class Blog extends Component {
    state = {
        auth:true
    }
    render () {
      return (
        <div className="Blog">
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/users">Users</NavLink></li>
                        <li><NavLink to="/courses">Courses</NavLink></li>
                    </ul>
                </nav>
            </header>

            <Switch>
            <Route path="/users" component={Users} />
            <Route path="/courses" component={Courses} /> 
            <Redirect from="/all-courses" to="/courses" />
            <Route component={NoMatch} />
            </Switch>                                     
                      
        </div>
    );
}
}

export default Blog;