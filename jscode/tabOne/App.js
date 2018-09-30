import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Platform
} from 'react-native';

import {
    TabNavigator,
    StackNavigator
} from 'react-navigation';

import TabPageDrawer from './TabHomePage';
import TabShopPage from './TabShopPage';
import TabMyPage from './TabMyPage';
import SettingPage from './SettingPage';
import MinePage from './MinePage';

const HomeIcon = require('../icons/home.png');
const MsgIcon = require('../icons/msg.png');
const MyIcon = require('../icons/my.png');

const HomePageStack = StackNavigator({
    TabHomePage : {
        screen : TabPageDrawer,
        navigationOptions : () => TabOptions('首页', HomeIcon, HomeIcon, '首页'),
    },
}, {
    mode : 'modal',
});

const MyPageStack = StackNavigator({
    TabMyPage : {
        screen : TabMyPage,
        navigationOptions : () => TabOptions('我的', MyIcon, MyIcon, '我的'),
    },

}, {
    mode : 'modal',
});

const ShopPageStack = StackNavigator({
    TabShopPage : {
        screen : TabShopPage,
        navigationOptions : () => TabOptions('购物车', MsgIcon, MsgIcon, '购物车'),
    },
}, {
    mode : 'modal',
});

const MainView = TabNavigator({
    TabHomePage : {
        screen : HomePageStack,
        navigationOptions : {

        }
    },
    TabShopPage : {
        screen : ShopPageStack,
        navigationOptions : {

        }
    },
    TabMyPage : {
        screen : MyPageStack,
        navigationOptions : {

        }
    },
}, {
    tabBarPosition : 'bottom',
    swipeEnabled : false,
    animationEnabled : false,
    backBehavior : 'none',
    lazy : true,
    tabBarOptions : {
        labelStyle : {
            margin : 2,
            paddingTop : 2,
        },
        iconStyle : {
            height : 35,
            width : 35,
            margin : 0
        },
        style : {
            height : 49,
            backgroundColor : 'white'
        },
        activeBackgroundColor : 'white',
        activeTintColor : '#FF3344',
        inactiveBackgroundColor : 'white',
        inactiveTintColor : '#aaa',
        showIcon : true,
        showLabel : false,
        pressOpacity : 0.3,
        indicatorStyle : {
            height : 0,
        }
    },
});


const App = StackNavigator({
    Home: {screen: MainView,navigationOptions:{
        header:null,
    }},
    SettingPage : { screen : SettingPage },
    MinePage : { screen : MinePage },
});


const TabOptions = (tabBarTitle, normalImage, selectedImage) => {
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({ tintColor, focused }) => {
        return (
            <View style={styles.tabImg}>
                <Image
                    source={!focused ? normalImage : selectedImage}
                    style={[{height:26,width:26}, {tintColor: tintColor}]}
                />
                <Text style={{color:focused?'#FF3344':'#43484d'}}>{tabBarTitle}</Text>
            </View>
        )
    });

    const headerTitleStyle = { fontSize : (Platform.OS === 'ios') ? 20 : 24, color : 'white', alignSelf : 'center' };
    const tabBarVisible = true;
    return { tabBarLabel, tabBarIcon, headerTitleStyle, tabBarVisible };
};

const styles = StyleSheet.create({
    tabImg : {
        alignItems : 'center',
        justifyContent : 'center',
    },
    img : {
        height : 100,
    },
    titleMsg : {
        textAlign : 'center',
        color : '#ff3233',
        paddingTop : 40,
        paddingBottom : 20,
    }
});

export default App; 