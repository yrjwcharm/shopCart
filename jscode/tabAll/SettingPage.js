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
export default class SettingPage extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./../icons/my.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),

    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                       this._skip();
                    }}
                >
                    <Text style={styles.textMsg}>再次打开DrawerNavigator</Text>
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
});