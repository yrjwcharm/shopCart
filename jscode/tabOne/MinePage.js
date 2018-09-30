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
       header:null,
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                       this._skip();
                    }}
                >
                    <Text style={styles.textMsg}>进入了MinePage,点击返回到首页</Text>
                </TouchableOpacity>

            </View>
        );
    }


    _skip=()=> {
       // this.props.navigation.navigate("DrawerOpen");
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
