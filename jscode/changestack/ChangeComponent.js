import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class ChangeComponent extends Component {
    static navigationOptions = {
        header:null,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.msg}>
                    ChangeComponent,重新初始化路由后进入的页面
                </Text>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    msg:{
        textAlign:'center',
        margin:20,
    }

});

