import React from 'react'
import Main from './Main';
import Aboutt from './Aboutt'
import Login from './Pages/Login'
import Register from './Pages/Register';
import Logout from './Pages/Logout';
import { Switch, Route,Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { Component } from 'react';
import * as authentication from './store/actions/index';
class App extends Component {
    componentDidMount(){
        this.props.onAuthCheck();
    }   
render(){
  let a=null
  if(this.props.token){
    a = (
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/about" component={Aboutt}/>
        {/*<Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>*/}
        <Route path="/logout" component={Logout}/>
        <Redirect to='/'/>
        </Switch>
    )
  }
  else{
    a = (<Switch>
    <Route path="/" exact component={Main}/>
    <Route path="/about" component={Aboutt}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    {/*<Route path="/logout" component={Logout}/>*/}
    <Redirect to='/'/>
    </Switch>)
  }
  return(
    <>
    {a}
    </>
  )
}
  
}

const mapStateToProps = state => {
  return {
    token: state.idToken
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAuthCheck: () => dispatch(authentication.authCheckState())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
