"use strict";

import { Router, Stack, Actions, Scene } from 'react-native-router-flux';
import Account from '../Containers/Account';
import Home from '../Containers/Home';
import DisplayAccountInfo from "../Components/DisplayAccountInfo";
import LastTransactions from "../Components/LastTransactions";
import React, { PureComponent } from "react";

class NavigationRouter extends PureComponent {
    
    render() {
        return (
            <Router>
                <Stack 
                    key="root"
                >
                    <Scene key="home" component={Home} initial/>
                    <Scene key="displayAccountInfo" component={DisplayAccountInfo}/>
                    <Scene key="lastTransactions" component={LastTransactions}/>
                </Stack>
            </Router>
        );
    }
}

export default NavigationRouter;