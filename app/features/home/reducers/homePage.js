'use strict';

import * as Actions from '../actionTypes';

const initialState = {
    isLoading: false,
    error: false,
    alertError: "",
    userName: "",
    passWord: "",
}

const homeScanner = (state = initialState, action) => {

    switch (action.type) {
        case Actions.login.userNameChanged:
            return userNameChanged(state, action.userName);
        case Actions.login.passwordChanged:
            return passwordChanged(state, action.password);
        default:
            return state;
    }

}

const userNameChanged = (state, userName) => {
    //alert("taext="+userName)
    var updatedState = Object.assign({}, state,
        {
            userName: userName,
        });
    return Object.assign({}, state, updatedState);
}

const passwordChanged = (state, password) => {
    //alert("taext="+password)
    var updatedState = Object.assign({}, state,
        {
            passWord: password,
        });
    return Object.assign({}, state, updatedState);
}

export default homeScanner;
