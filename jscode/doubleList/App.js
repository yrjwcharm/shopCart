import React, { Component } from 'react';
import {
    Image
} from 'react-native';

import { StackNavigator} from 'react-navigation';
import ParcelPage from './ParcelPage'


const App = StackNavigator({
    ParcelPage : { screen : ParcelPage },
});

export default App;