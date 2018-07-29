import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Life from './page/demo/life';
import Admin from './common/admin';
import Login from '../src/page/form/login'
import Home from '../src/page/home/'
import TableHigh from '../src/page/table/highTable'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from  './redux/store/configureStore'
const store = configureStore()
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Switch>
            <Route path="/" render={()=>
                <Admin>
                    <Switch>
                        <Route path="/" component={TableHigh} />
                        <Route path="/life" component={Life}/>
                        <Route path="/form/login" component={Login} />
                        <Route path="/table/high" component={TableHigh} />
                        <Redirect to="/" />
                    </Switch>
                </Admin>
            } />
        </Switch>
      </HashRouter>
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();
