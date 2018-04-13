"use strict";

import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Actions } from 'react-native-router-flux';

class DisplayAccountInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.main}>
                <TouchableOpacity 
                    style={styles.infoAccountButton} 
                    onPress={Actions.lastTransactions}
                >
                    <View>
                        <Text>
                            Compte CIC
                        </Text>
                        <Text>
                            M. John SMITH
                        </Text>
                        <Text>
                            CIC
                        </Text>
                    </View>
                    <View>
                        <Image 
                            source={require('../Images/info.png')}
                            style={styles.image}
                        />
                        <Text style={styles.money}>
                            10.67€
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    main: {
        backgroundColor: "rgba(107, 243, 225, 0.5)",
        padding: 15,
        borderRadius: 7,
        marginBottom: 25,
        elevation: 1.5
    },
    money: {
        textAlign: "right",
        fontSize: 30
    },
    image: {
        height: 30,
        width: 30,
        marginLeft: 135,
        marginBottom: 50
    },
    infoAccountButton: {
        flexDirection: "row"
    }
})


export default DisplayAccountInfo;
