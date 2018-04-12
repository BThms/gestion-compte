"use strict";

import React, { Component } from "react";
import { View, Text } from "react-native";
import DisplayAccountInfo from "../Components/DisplayAccountInfo";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View>
                <DisplayAccountInfo/>
            </View>
            
        );
    }
}


export default Home;
