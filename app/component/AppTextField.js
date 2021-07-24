'use strict';

import React from 'react';
import { StyleSheet, View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import Constants from '../Constants';
import Colors from '../theme/Color';
import { langAlignment, fontMediumStyle, fontMediumTextFieldStyle } from '../helpers/languageSpecificConstants';
import Images from '../Images';

export default class AppTextField extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showPassword: false
        }
    }

    render() {
        const ImageTag = (this.props.icon == null) ? null : <Image style={styles.icon} source={this.props.icon} />;
        return (
            <View style={[styles.container, this.props.style]}>
                {ImageTag}
                <TextInput style={[styles.textInput, this.props.customTextInputStyle, fontMediumTextFieldStyle(16)]}
                    keyboardType={this.props.keyboardType}
                    selectionColor={Colors.textPlaceholder}
                    defaultValue={this.props.defaultValue}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChangeText={(val) => this.props.onChangeText(val)}
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                    returnKeyType={this.props.returnKeyType}
                    secureTextEntry={this.props.secureTextEntry && !this.state.showPassword}
                    onSubmitEditing={this.props.onSubmitEditing}
                    editable={this.props.editable}
                    autoCapitalize={this.props.autoCapitalize}
                    maxLength={this.props.maxLength}
                    ref={this.props.reff}
                    multiline={this.props.multiline}
                    numberOfLines={this.props.numberOfLines} />
                {
                    this.props.secureTextEntry &&
                    <TouchableOpacity
                        style={{ alignSelf: "center" }}
                        onPress={() => { this.setState({ showPassword: !this.state.showPassword }) }}
                    >
                        <Image source={Images.fieldVisibility} />
                    </TouchableOpacity>
                }
            </View>
        );
    }
}

AppTextField.defaultProps = {
    secureTextEntry: false,
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEF0F3',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        textAlign: "center",
        paddingLeft: Math.round(Constants.horizontalDesignScreenRatio * 12),
        paddingRight: Math.round(Constants.horizontalDesignScreenRatio * 12),
    },
    icon: {
        height: 17,
        width: 17,
        marginEnd: Math.round(Constants.horizontalDesignScreenRatio * 17),
    },
    textInput: {
        flex: 1,
        height: "100%",
        textAlign: langAlignment,
    }
});