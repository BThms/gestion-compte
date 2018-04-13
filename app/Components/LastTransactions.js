"use strict";

import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from "react-native";

const depences = ["12", "45", "20", "12", "45", "20"];

class LastTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.transactions}>
                <View style={styles.title}>
                    <Text>Derniers mouvements</Text>
                    <Image 
                        source={require('../Images/arrows.png')}
                        style={styles.image}
                    />
                </View>
                <ScrollView style={styles.scrollView}>
                    <FlatList
                        data={depences}
                        renderItem={({index, item}) => {
                            let color = "rgba(186, 186, 186, 0.2)";
                            if (index % 2 !== 0) {
                                color = "rgba(107, 243, 225, 0.1)";
                            }
                            return (
                                <View style={[styles.expense, {backgroundColor: color}]}>
                                    <Text style={styles.expenseTitle}>Binouse au bar</Text>
                                    <View style={styles.expenseTextView}>  
                                        <Text style={styles.expenseText}>{item} €</Text>
                                    </View>
                                </View>
                            );
                        }}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    transactions: {
    },
    scrollView: {
        borderWidth: 1,
        borderColor: "rgba(107, 243, 225, 0.5)",
    },
    title: {
        backgroundColor: "rgba(107, 243, 225, 0.5)",
        padding: 10,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        flexDirection: "row"
    },
    expense: {
        paddingLeft: 15,
        paddingRight: 10,
        flexDirection: "row"
    },
    expenseTextView: {
        flex: 1
    },
    expenseText: {
        textAlign: "right"
    },
    expenseTitle: {
        textAlign: "left"
    },
    image: {
        height: 22,
        width: 22,
        marginLeft: 130
    }
})


export default LastTransactions;
