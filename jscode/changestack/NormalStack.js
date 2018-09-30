
import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    Alert,
} from 'react-native';
import {StackNavigator } from 'react-navigation';
import NormalComponent from './NormalComponent'

const NormalStack = StackNavigator({
    NormalComponent: {screen:NormalComponent},
},{
    swipeEnabled:false,
    animationEnabled:false,
    backBehavior:'none',
    lazy:true,
});

export default NormalStack;
