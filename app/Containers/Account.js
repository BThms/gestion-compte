"use strict";

import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Actions from "react-native-router-flux";


class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.main}>
                <Text>defvgbhniufuyjcvhgccfgrjbfnguhvg</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    main: {
        backgroundColor: "pink",
        padding: 15,
        borderRadius: 15,
        top: 20,
        right: 10,
        left: 10
    },
    money: {
        textAlign: "right"
    }
})


export default Account;
