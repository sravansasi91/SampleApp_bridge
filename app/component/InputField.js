import React, { Component } from "react";
import { View, Text, StyleSheet,TextInput } from "react-native";
class InputField extends Component {
  render() {
    const { labelText,
        labelTextSize,
        labelColor,
        textColor,
        borderBottomColor,
        inputType,
        customStyle
    } = this.props;
    const color = labelColor || "#848080";
    const fontSize = labelTextSize || 14;
    const inputColor = textColor || "black";
    const borderBottom = borderBottomColor || "transparent";
    return (
        <View style={[customStyle, styles.wrapper]}>
        <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
        <TextInput
          autoCorrect={false}
          style={[
            { color: inputColor, borderBottomColor: borderBottom},
            styles.inputFiled
          ]}
          secureTextEntry={this.props.paswordText=="true"?true:false}//{inputType === "password"}
          onChangeText={(val) => this.props.onChangeText(val)}
          underlineColorAndroid="#C6B36A"
          autoFocus = {this.props.autoFocus=="true"?true:false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    backgroundColor:"#FFF",
    borderRadius:10,
    paddingTop:"2%",
    paddingLeft:"5%", 
  },
  label: { fontWeight: "700", marginBottom: 10 },
  inputFiled: {
    borderBottomWidth: 1,
    width:"96%",
    paddingTop: 5,
    paddingBottom: 5,
    paddingEnd:10
  }
});
export default InputField;
