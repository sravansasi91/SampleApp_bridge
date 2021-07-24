'use strict';

import * as React from 'react';

export default async function loginService(success, failure, userName, passWord, nativeData) {
    //alert("api call")
    try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
        //this.setState({ data: json.movies });
        alert("Login Success, Api Response = " + JSON.stringify(json) + ", NATIVE DATA=" + JSON.stringify(nativeData)
            + ", User name=" + userName + ", Password = " + passWord)
        success(json)
    } catch (error) {
        console.log(error);
        alert("Login Error")
        failure(error)
    } finally {
    }
}