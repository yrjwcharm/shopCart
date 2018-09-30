import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter,
    TouchableOpacity
} from 'react-native';

export default class NormalComponent extends Component {
    static navigationOptions = {
        header:null,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.msg}>
                    NormalComponent,未进行路由初始化状态修改
                </Text>
                <TouchableOpacity onPress={this._postMsgByListener}>
                    <Text style={styles.msg}>使用ChangeComponent来修改StackNavigator</Text>
                </TouchableOpacity>

            </View>
        );
    }

    _postMsgByListener=()=>{
        DeviceEventEmitter.emit('change','修改');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },

    msg:{
        textAlign:'center',
        margin:20,
    }
});


