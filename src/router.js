import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import Login from './page/form/login'
import Admin from './common/admin'
import Home from './page/home'
import TableHigh from './page/table/highTable'
import Life from "./page/demo/life";
import NoMatch from './page/nomatch';

export default class IRouter extends React.Component {

  render() {
    return (
        <HashRouter>
          <App>
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/" render={() =>
                  <Admin>
                    <Switch>
                      <Route path="/home" component={Home}/>
                      <Route path="/life" component={Life}/>
                      <Route path="/form/login" component={Login} />
                      <Route path="/table/high" component={TableHigh} />
                      <Route component={NoMatch}/>
                    </Switch>
                  </Admin>
              }/>
            </Switch>
          </App>
        </HashRouter>
    );
  }
}