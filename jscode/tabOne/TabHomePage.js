import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image,Dimensions,
    ScrollView,
    Platform } from 'react-native';

import {
    DrawerNavigator,
    DrawerItems,
} from 'react-navigation';


import SettingPage from './SettingPage';
import MinePage from './MinePage';

class TabHomePage extends Component {
    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        return {
            headerRight: (
                <TouchableOpacity
                    onPress={() => {
                        state.params.navigatePress()
                    }}>
                    <View style={styles.titleRight}>
                        <Text>static 不能使用this</Text>
                    </View>

                </TouchableOpacity>
            ),
            headerLeft: (
                <TouchableOpacity
                    onPress={() => {
                        state.params.drawToggle()
                    }}
                >
                    <View style={styles.titleLeft}>
                        <Text>打开侧滑页面</Text>
                    </View>
                </TouchableOpacity>
            ),
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../icons/my.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        };
    };

    componentWillMount = () => {
        this.props.navigation.setParams({
            navigatePress: this.navigatePress,
            drawToggle: this.drawToggle,
        })
    };

    drawToggle = () => {
        this.props.navigation.navigate("DrawerOpen");
    };

    navigatePress = () => {
        alert('此处展示如何头部使用this,或者如何进行方法的调用');
    };


    render() {
        const {state,goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("DrawerOpen");
                    }}
                >
                    <Text style={styles.homeMsg}>这里是首页，{'\n'}点击这里打开这里DrawerNavigator</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate("SettingPage");
                    }}>
                    <Text>点击进入SettingPage</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("MinePage");
                    }}
                >
                    <Text>点击进入MinePage</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

let { width, height } = Dimensions.get('window');
const TabPageDrawer = DrawerNavigator({
        '首页' : { screen : TabHomePage },
        "设置" : { screen : SettingPage },
        MinePage : { screen : MinePage},
    }, {
        drawerWidth : width / 4 * 3,
        drawerPosition : 'left',
        contentOptions : {
            initialRouteName : TabHomePage,
            activeItemKey : 'Notifications',
            labelStyle : {
                height : 20,
            },
            activeTintColor : 'white',
            activeBackgroundColor : '#ff8500',
            inactiveTintColor : '#666',
            inactiveBackgroundColor : '#fff',
            style : {
                marginVertical : 0,
            },
        },

        contentComponent : props => {
            return (
                <ScrollView>
                    <View>
                        <View style={{backgroundColor: '#ffff' }}>
                            <TouchableOpacity
                                onPress={() => {
                                  props.navigation.navigate('MinePage');
                               }}>
                                <Text style={styles.titleMsg}>个人照片</Text>
                                <Image source={require('../icons/one.png')} style={styles.img}/>
                            </TouchableOpacity>
                        </View>
                        <DrawerItems {...props} />
                    </View>
                </ScrollView>
            )
        },
    },
);


export default TabPageDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFF'
    },
    icon: {
        width: 24,
        height: 24,
    },
    titleLeft:{
        marginLeft:20,
    },
    titleRight:{
       marginRight:20,
    },
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
    },
    button:{
        padding:20,
    },
    homeMsg:{
        textAlign:'center',
    }
});
