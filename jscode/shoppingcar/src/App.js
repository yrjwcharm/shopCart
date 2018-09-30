import React, { Component } from 'react';
import {
    Image
} from 'react-native';

import { StackNavigator} from 'react-navigation';
import MainPage from './MainPage'
import ShoppingCarPage from './ShoppingCarPage'
import MobxShoppingCarPage from './mobx/MobxShoppingCarPage'


const App = StackNavigator({
    MainPage : { screen : MainPage },
    ShoppingCarPage : { screen : ShoppingCarPage },
    MobxShoppingCarPage : { screen : MobxShoppingCarPage },
});

export default App;