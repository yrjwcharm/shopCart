
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,DeviceEventEmitter} from 'react-native';

export default class TabShopPage extends Component {
    static navigationOptions = {
        headerRight: (<TouchableOpacity
                onPress={() => {
                   console.log("购物车");
            }}>
                <Text style={{color: '#4a4a4a'}}>帮助</Text>
            </TouchableOpacity>
        )
    };



    render() {
        const { state, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('TabMyPage');
                    }}
                >
                    <Text style={styles.msg}>点击跳转到我的,{'\n'}
                           进行Tab切换</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFF'
    },
    msg:{
        textAlign:'center',

    }
});

