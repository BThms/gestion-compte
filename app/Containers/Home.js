"use strict";

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DisplayAccountInfo from '../Components/DisplayAccountInfo';
import LastTransactions from '../Components/LastTransactions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.home}>
                <DisplayAccountInfo/>
                <LastTransactions/>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    home: {
        margin: 45
    }
})

export default Home;
