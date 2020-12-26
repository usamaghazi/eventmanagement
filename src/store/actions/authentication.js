import * as actionTypes from './action';
import axios from 'axios';

export const authSuccess = (idToken,localId) => {
    return {
        type:actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        localId: localId
    }
}

export const authSuccesss = (idToken,localId) => {
    return {
        type:actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        localId: localId
    }
}

export const authFail = (error) => {
    return {
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}

export const authFaill = (error) => {
    return {
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}

export const logout = () => {
    return{
        type:actionTypes.LOG_OUT,
    }
}

export const checkAuthTimeOut = (expiresIn) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(logout());
        },expiresIn*1000)
    }
}

export const auth = (email,password) => {
    return dispatch => {
        const a = {
            email:email,
            password:password,
            returnSecureToken:true
        }
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUFAhaIFCznVcdC66h_8YxYSsH2sGAwLQ';
        axios.post(url,a)
        .then(res=>{
            const date = new Date();
            const time = new Date(date.setSeconds(date.getSeconds() + 3600));
            localStorage.setItem('idToken', res.data.idToken);
            localStorage.setItem('localId', res.data.localId);
            localStorage.setItem('expireDate', time);
            dispatch(authSuccess(res.data.idToken,res.data.localId));
            dispatch(checkAuthTimeOut(res.data.expiresIn))
            console.log(res.data.idToken, res);
            }
        )
        .catch(err=>{
            console.log(err.response.data.error.message)
            dispatch(authFail(err.response.data.error.message))
        })
    }
}

export const authforSignup = (email,password) => {
       return dispatch => {
            const a = {
                email: email,
                password: password,
                returnSecureToken: true
            }
            const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCUFAhaIFCznVcdC66h_8YxYSsH2sGAwLQ';
            axios.post(url,a)
            .then(res=>{
                dispatch(authSuccesss(res.data.idToken,res.data.localId))
            })
            .catch(err=>{
                dispatch(authFaill(err.response.data.error.message))
            })
       }
}

export const authCheckState = () => {
    return dispatch => {
        const idToken = localStorage.getItem('idToken');
        if (!idToken) {
            dispatch(logout());
            console.log('hi You are logout gamer')
        }
        else {
            const expirationDate = new Date(localStorage.getItem('expireDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout());
                console.log('com to logout')
            }
            else {
                const localId = localStorage.getItem('localId');
                dispatch(authSuccess(idToken, localId));
                dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000));
                console.log('remaining Time of logout' + (expirationDate.getTime() - new Date().getTime()));
            }
        }
    }
}