import React, { Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
// import axios from 'axios';
import { connect } from 'react-redux'
import * as authentication from '../store/actions/index';

class Register extends Component {
  state={
    username:'',
    email:'',
    password:'',
    passwordd:'',
    match: false
  }
  changeHandler = (e) => {
    let bc = e.target.value;
      this.setState({username:bc});
  }
  changiHandler = (e) => {
    let bc = e.target.value;
      this.setState({email:bc});
  }
  changoHandler = (e) => {
    let bc = e.target.value;
      this.setState({password:bc});
  }
  changqHandler = (e) => {
    let bc = e.target.value;
      this.setState({passwordd:bc});
  }
  clickHandler = (e) => {
    e.preventDefault();
    if(this.state.password === this.state.passwordd){
      // const a = {
      //   email: this.state.email,
      //   password: this.state.password,
      //   returnSecureToken: true
      // }
      // const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCUFAhaIFCznVcdC66h_8YxYSsH2sGAwLQ';
      // axios.post(url,a)
      // .then(res=>{
      //   console.log(res.data)
      //   this.props.history.push('/')
      // })
      // .catch(err=>{
      //   console.log(err.response.data.error.message)
      //   this.setState({error:err.response.data.error.message})
      // })
      this.props.onRegistration(this.state.email,this.state.password)
      setTimeout(()=>{
        if(this.props.token){
          this.props.history.push('/')
        }
      },2000)
    }
    else{
        this.setState({match:true})
    }
  }
  render(){
    let errorMessage= null;
    if(this.props.error){
      errorMessage=<p style={{ color: 'red' }}>*{this.props.error}</p>
    }
    let notMatch = null;
    if(this.state.match){
      notMatch=<p style={{ color: 'red' }}>*PASSWORD_NOT MATCHED</p>
    }
  return (
    <div className="c-app c-default-layout mt-5 pt-3 flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                    type="text" 
                    placeholder="Username" 
                    autoComplete="username" 
                    required
                    onChange={this.changeHandler}
                    value={this.state.username}/>
                    </CInputGroup> 
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                    type="text" 
                    placeholder="Email" 
                    autoComplete="email" 
                    required
                    onChange={this.changiHandler}
                    value={this.state.email}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                    type="password" 
                    placeholder="Password" 
                    autoComplete="new-password" 
                    required
                    onChange={this.changoHandler}
                    value={this.state.password}/>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                    type="password" 
                    placeholder="Repeat password" 
                    autoComplete="new-password" 
                    required
                    onChange={this.changqHandler}
                    value={this.state.passwordd}/>
                  </CInputGroup>
                  {errorMessage}
                  {notMatch}
                  <CButton 
                  color="success" 
                  block
                  disabled={!(this.state.username&&this.state.email&&this.state.password&&this.state.passwordd)}
                  onClick={this.clickHandler}>Create Account</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
  }
}

 const mapStateToProps = state => {
  return {
    token: state.idToken,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRegistration: (email,password) => dispatch(authentication.authforSignup(email,password))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)