'use strict';

import { connect } from 'react-redux';
import store from './../../store';
import homePageScreen from './../components/homePageScreen'
import * as Action from './../actionTypes';
import loginService from "../../api/loginService"

const mapStateToProps = state => {
  return {
    isLoading: state.homePageReducer.isLoading,
    error: state.homePageReducer.error,
    alertError: state.homePageReducer.alertError,
    userName: state.homePageReducer.userName,
    passWord: state.homePageReducer.passWord,
  }
};

const mapDispatchToProps = dispatch => ({
  userChanged: (uname) => dispatch(userNameChanged(uname)),
  passChanged: (password) => dispatch(passwordChanged(password)),
  loginTapped: (userName, passWord, natData) => loginUser(dispatch, userName, passWord, natData),

});

export function passwordChanged(password) {
  return {
    type: Action.login.passwordChanged,
    password: password,
  }
}

export function userNameChanged(userName) {
  return {
    type: Action.login.userNameChanged,
    userName: userName,
  }
}

export const loginUser = async (dispatch, userName, passWord, natData) => {
  //alert("loginsssss")
  dispatch(serviceLoginPending());
  loginService(
    (sessionToken, refreshToken, userInfo, userPayload) => {
      dispatch(serviceLoginSuccess(userPayload));
    },
    (errorMessage) => {
      dispatch(serviceLoginError(errorMessage));
    },
    userName,
    passWord,
    natData
  )
}

export function serviceLoginSuccess(userName) {
  return {
    type: Action.login.loginSuccess,
    userName: userName,
  }
}

export const serviceLoginPending = () => ({
  type: Action.login.loginPending
})
export const serviceLoginError = (error) => ({
  type: Action.login.loginError,
  error: error,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(homePageScreen);