import React, { Component } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import InputField from "../../app/component/InputField"

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("LogProps==" + JSON.stringify(this.props))
        return (
            <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollViewStyle}>
                        <View style={{ paddingTop: "5%" }}>
                            <InputField
                                onChangeText={(val) => this.props.onChangeTextUser(val)}
                                labelText="User ID"
                                autoFocus="true" />
                        </View>
                        <View style={{ paddingTop: "5%" }}>

                            <InputField
                                onChangeText={(val) => this.props.onChangeTextPass(val)}
                                labelText="Password"
                                paswordText="true"
                            />
                        </View>
                        <View style={{ paddingTop: "5%", paddingBottom: "3%" }}>
                            <View style={{ height: 50, flex: 2, alignItems: "center" }}>
                                <TouchableOpacity
                                    onPress={() => this.props.onPress()}
                                    style={[styles.logButton,]}
                                >
                                    <Text style={
                                        styles.topButtonTxt
                                    }>Submit </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ paddingTop: "2%", paddingBottom: "3%" }}>
                        <TouchableOpacity
                                    onPress={() => this.props.onPress()}
                                    style={[styles.forgotText,]}
                                >
                                    <Text style={
                                        styles.forgotTxt
                                    }>Forgot User ID  |  Forgot Password </Text>
                                </TouchableOpacity>
                        </View>
                        <View style={{ paddingTop: "2%", paddingBottom: "3%" }}>
                        <TouchableOpacity
                                    onPress={() => this.props.onPress()}
                                    style={[styles.forgotText,]}
                                >
                                    <Text style={
                                        styles.forgotTxt
                                    }>Enable User ID </Text>
                                </TouchableOpacity>
                        </View>


                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flex: 1,
        //backgroundColor: "black",
        opacity: .99
    },
    scrollViewWrapper: {
        marginTop: 40,
        flex: 1,
        justifyContent: 'space-between',
        //backgroundColor:"black"
    },
    scrollViewStyle: {
        height: "100%",
        //backgroundColor:"black"
    },
    topButtonTxt: {
        //backgroundColor: "green",
        color: 'white',
        textAlign: "center",
    },
    logButton: {
        borderRadius: 20,
        width: "90%",
        height: "100%",
        textAlign: "center",
        backgroundColor: "#9E9D9B",
        justifyContent: "center",
    },
    forgotText:{
        textAlign: "center",
        //backgroundColor: "#9E9D9B",
        justifyContent: "center",
    },
     forgotTxt: {
        color: '#9E9D9B',
        textAlign: "center",
        fontSize: 10
    },
    
});