import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class MinePage extends Component {
    static navigationOptions = {

    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                       this._skip();
                    }}
                >
                    <Text style={styles.textMsg}>再次打开DrawerNavigator,{'\n'}打开侧滑按钮</Text>
                </TouchableOpacity>

            </View>
        );
    }


    _skip=()=> {
        this.props.navigation.navigate("DrawerOpen");
    }
}

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
    textMsg:{
        textAlign:'center'
    }
});
