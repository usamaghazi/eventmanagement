import React,{ Component } from 'react'
import { Link  } from 'react-router-dom'
// import axios from 'axios'
import './Login.css'
import { connect } from 'react-redux'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import * as authentication from '../store/actions/index';

class Login extends Component {
    state={
        email:'',
        password:'',
        error:''
    }
  changeHandler = (e) => {
      let bc = e.target.value;
      this.setState({email:bc});
  }
  changiHandler = (e) => {
    let bc = e.target.value;
    this.setState({password:bc});
}   
 clickHandler = (e) => {
     e.preventDefault();
        // const a = {
        //     email:this.state.email,
        //     password:this.state.password,
        //     returnSecureToken:true
        // }
        // const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUFAhaIFCznVcdC66h_8YxYSsH2sGAwLQ';
        // axios.post(url,a)
        // .then(res=>{
        //     if(res.data.idToken){
        //         this.props.history.push('/')
        //     }
        // })
        // .catch(err=>{
        //     console.log(err.response.data.error.message)
        //     this.setState({error:err.response.data.error.message})
        // })
        this.props.onAuthentication(this.state.email,this.state.password);
        setTimeout(()=>{
          if(this.props.token){
            this.props.history.push('/')
          }
        },2000)
 }
 render(){
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p style={{ color: 'red' }}>*{this.props.error}</p>
    }
    return (
      <>
      <div className="Fixedd-Image">
      <div className="gap100" style={{paddingBottom:'12%',paddingTop:'2%'}}>
        <div className="c-app c-default-layout mt-5 pt-5 flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md="8">
                <CCardGroup>
                  <CCard className="p-4">
                    <CCardBody>
                      <CForm>
                        <h1>Login</h1>
                        <p className="text-muted">Sign In to your account</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <img src="images/lock.png" alt="lock"/>
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput 
                          type="text" 
                          placeholder="Username" 
                          autoComplete="username"
                          onChange={this.changeHandler} 
                          value={this.state.email}
                          required/>
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                            <img src="images/key.png" alt="lock"/>
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput 
                          type="password"
                          placeholder="Password" 
                          autoComplete="current-password"
                          onChange={this.changiHandler} 
                          required/>
                        </CInputGroup>
                        {errorMessage}
                        <CRow>
                          <CCol xs="6">
                            <CButton 
                            color="primary"
                            className="px-4"
                            disabled={!(this.state.email && this.state.password)}
                            onClick={this.clickHandler}>
                            Login</CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    </CCardBody>
                  </CCard>
                  <CCard className="text-white Gradient py-5 d-md-down-none" style={{ width: '44%' }}>
                    <CCardBody className="text-center">
                      <div>
                        <h2>Sign up</h2>
                        <p>If you all ready not registered then register here</p>
                        <Link to="/register">
                          <CButton  className="mt-3 btn btn-outline-secondary" active tabIndex={-1}>Register Now!</CButton>
                        </Link>
                      </div>
                    </CCardBody>
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>


        </div> 
     </div>
        </>
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
    onAuthentication: (email,password) => dispatch(authentication.auth(email,password))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)