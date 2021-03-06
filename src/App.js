import React,{Component} from "react";
import Home from './Home/index'
import Lesson from './Lesson/index'
import Profile from './Profile/index'
import ProtectRouter from'./ProtectRouter/ProtectRouter'
import Tab from './Tab/index'
import Login from './ProtectRouter/Login'
import {Provider} from 'react-redux'
import store from './redux/store'
import NotFoundPage from './ProtectRouter/NotFoundPage'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
window.store=store;
 export default class App extends Component{
 	render(){
 		return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <ProtectRouter path='/Lesson' component={Lesson}/>
                            <Route path="/login" component={Login}/>
                            <Route path='/Profile' component={Profile}/>
                            <Route path='/404' component={NotFoundPage} />
                            <Redirect from='*' to='/404'/>
                        </Switch>
                        <Tab></Tab>
                    </div>
                </Router>
            </Provider>

 		)
 	}
 }
