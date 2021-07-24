'use strict';
import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Text, Button, Image, TouchableOpacity, ActivityIndicator, Animated, BackHandler } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import LoginScreen from "../../../component/LoginScreen"
import { NativeModules } from 'react-native';

const { GetPhoneInformation } = NativeModules;
const { UIManager } = NativeModules;

const Tab = createMaterialBottomTabNavigator(
);

function HomeScreen() {
    return null
}
function SettingsScreen() {
    return null
}
function Notifications() {
    return null
}

export default class homePageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginWindow: false,
            data: [],
            isLoading: false,
            fadeAnim: new Animated.Value(0),
            w: 90,
            h: 90,
            downFlag: false
        }
    }
    registerClick() {
        alert("RegisterClick")
    }
    loginClick() {
        this.setState({ loginWindow: true })
        //this.props.navigation.navigate('LoginPage')
    }
    async getNativeCall() {
        //alert("Native Call")     
        let data = await GetPhoneInformation.show();
        console.log(data);
        this.getMovies(data);
    }
    async getMovies(natdata) {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            this.setState({ data: json.movies });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
        alert("Api Response = " + JSON.stringify(this.state.data) + ", NATIVE DATA=" + JSON.stringify(natdata))
    }

    async submitCall() {
        //alert("submit")
        if (this.props.userName == "") {
            alert("Please enter UserID")
        }
        else if (this.props.passWord == "") {
            alert("Please enter Password")
        }
        else {
            this.setState({ isLoading: true })
            let data = await GetPhoneInformation.show();
            //console.log(data);
            this.props.loginTapped(this.props.userName, this.props.passWord, data)
            this.setState({ isLoading: false })
        }
    }
    handleBackButtonClick() {
    }


    componentDidMount() {
        this._interval = setInterval(() => {
            if (this.state.downFlag) {
                this.setState({
                    h: this.state.h - .1,
                    w: this.state.w - .1,
                })
            } else {
                this.setState({
                    h: this.state.h + .1,
                    w: this.state.w + .1,
                })
            }
            if (this.state.h >= 95) {
                this.setState({ downFlag: true })
            }
            if (this.state.h <= 90) {
                this.setState({ downFlag: false })
            }
        }, 100);
    }


    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress',
            this.handleBackButtonClick
        );
    }

    render() {
        console.log("HomeProps=" + JSON.stringify(this.props))
        return (
            <View style={[styles.container, {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "column"
            }]}>
                <View style={styles.topView}>
                    <View style={styles.btnViewTop}></View>
                    <View style={styles.btnView}>
                        <TouchableOpacity
                            onPress={() => this.registerClick()}
                            style={[styles.topButton,]}
                        >
                            <Text style={
                                styles.topButtonTxt
                            }>Register</Text>

                        </TouchableOpacity>
                    </View>
                </View>
                {<View style={styles.bodyView} >
                    <Animated.View style={[styles.contentView2, { height: this.state.w + "%", }]}>
                        <Animated.View style={[styles.contentView1, { height: this.state.h + "%", }]}>
                            {!this.state.loginWindow && <Animated.View style={styles.contentView}>
                                <Text style={styles.headContent}>RAKBANK</Text>
                                <Text style={[styles.childContent, { paddingTop: 20 }]}>
                                    Everything you love about Digital Banking in a smarter, simpler design</Text>
                            </Animated.View>}
                        </Animated.View>
                    </Animated.View>
                </View>}
                {this.state.loginWindow &&
                    <View style={{
                        position: 'absolute',
                        marginTop: 20,
                        top: "10%",
                        bottom: 0,
                        left: "5%",
                        //right: "5%",
                        paddingRight: "5%",
                        paddingEnd: "5%",
                        flex: 6, width: "95%",
                        height: "80%", //backgroundColor: "white",
                        position: "absolute", alignContent: "center",
                    }}>
                        <LoginScreen
                            onChangeTextUser={(text) => this.props.userChanged(text)}
                            onChangeTextPass={(text) => this.props.passChanged(text)}
                            onPress={() => this.submitCall()} />

                        {this.props.isLoading && <ActivityIndicator size="large"
                            style={{
                                height: '30%', width: '100%', alignItems: 'center',
                            }}
                        />}
                    </View>
                }


                {!this.state.loginWindow &&
                    <View style={styles.bottomView} >
                        <View style={[styles.loginView]}>
                            <TouchableOpacity
                                onPress={() => this.loginClick()}
                                //onPress={() => this.getNativeCall()}
                                style={[styles.logButton,]}
                            >
                                <Text style={
                                    styles.topButtonTxt
                                }>Login with User ID</Text>
                            </TouchableOpacity>
                            <View style={[styles.container2, {
                                flexDirection: "row"
                            }]}>
                                <View style={{ flex: 1, height: "10%", width: "2%" }}>
                                    <Ionicons style={styles.tImage} name={'ios-finger-print'} size={30} color={"#959392"} />

                                </View>
                                <View style={{
                                    flex: 1, height: "43%", alignSelf: "flex-start", paddingRight: "15%"
                                }} >
                                    <Text style={
                                        styles.tIconContent
                                    }>Quick Balance</Text>
                                </View>
                            </View>
                        </View>

                    </View>

                }
                <View style={styles.bottamBarView}>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <View style={styles.menuBtn}>
                            <Ionicons name={"ios-folder-open-sharp"} size={30} color={"#959392"}></Ionicons>
                            <Text>Products</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <View style={styles.menuBtn}>
                            <Ionicons name={"ios-chatbubble-ellipses-outline"} size={30} color={"#959392"}></Ionicons>
                            <Text>Live Chats</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <View style={styles.menuBtn}>
                            <Ionicons name={"ios-key-outline"} size={30} color={"#959392"}></Ionicons>
                            <Text>RAKToken</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <View style={styles.menuBtn}>
                            <Ionicons name={"ios-location-sharp"} size={30} color={"#959392"}></Ionicons>
                            <Text>Locate us</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F4E8"
        ,
    },
    topView: {
        flex: 1, backgroundColor: "#FC1A22", flexWrap: "nowrap", paddingRight: 15
    },
    bodyView: {
        flex: 6,
        backgroundColor: "#B91D29",
        borderBottomStartRadius: 200,
        borderBottomEndRadius: 200,
        transform: [{ scaleX: 2 }]
    },
    contentView2: {
        height: "90%",
        backgroundColor: "#F64653",
        borderBottomStartRadius: 250,
        borderBottomEndRadius: 500,
        transform: [{ scaleX: .9 }]
    },
    contentView1: {
        backgroundColor: "#FC1A22",
        height: "90%",
        borderBottomStartRadius: 80,
        borderBottomEndRadius: 650,
        transform: [{ scaleX: .9 }]
    },
    bottomView: {
        flex: 4,
        flexDirection: "column",
        backgroundColor: "#F7F4E8"
    },
    btnView: {
        borderWidth: 1.5,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        width: "25%",
        height: "50%",
        alignSelf: "flex-end",
        textAlign: "center",
    },
    btnViewTop: {
        width: "25%",
        height: "50%",
    },
    topButton: {
        width: "100%",
        height: "100%",
        justifyContent: "center"
    },
    topButtonTxt: {
        color: 'white',
        textAlign: "center",
    },
    headContent: {
        fontSize: 60,
        fontWeight: "500",
        color: "#FFFFFF",
    },
    contentView: {
        //height: "95%",
        //transform: [{ scaleX: 0 }],
        transform: [{ scaleX: 0.45 }, { scaleY: 0.7 }],
        borderRadius: 150,
        backgroundColor: "#F9231F"
    },
    contentViewOut: {
        borderRadius: 10,
        backgroundColor: "yellow",
        paddingTop: 50,
        transform: [{ scaleX: 1 }],
    },
    childContent: {
        width: "80%",
        fontSize: 26,
        color: "#FFFFFF",
    },
    loginView: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        paddingStart: "10%",
        paddingTop: "25%",
    },
    logButton: {
        borderRadius: 20,
        width: "90%",
        height: "30%",
        textAlign: "center",
        backgroundColor: "#464544",
        justifyContent: "center",
    },
    bottamBar: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#FFFF",
        justifyContent: "center",
        paddingBottom: 0
    },
    bottamBarView: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#FFFF",
        borderTopWidth: 1,
        borderTopColor: "#C2BFBF"
    },
    bottomMenu: {
        backgroundColor: "green",
        justifyContent: 'center', alignItems: 'center',
    },
    tImage: {
        flexDirection: "row",
        width: "80%",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "3%",
        paddingLeft: "50%"
    },
    tIconContent: {
        fontSize: 12,
        fontWeight: "500",
        color: "black",
        paddingTop: "10%",
        alignSelf: "flex-start",
    },
    container2: {
        flex: 1,
        padding: 10,
    },
    menuBtn: {
        justifyContent: "center"
        , alignItems: "center"
    }
});

