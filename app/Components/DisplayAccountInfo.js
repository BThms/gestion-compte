"use strict";

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


class DisplayAccountInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.main}>
                <Text>
                    Compte CIC
                </Text>
                <Text>
                    M. Enculé De Tarace
                </Text>
                <Text>
                    CIC
                </Text>
                <Text style={styles.money}>
                    10.67€
                </Text>
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


export default DisplayAccountInfo;
