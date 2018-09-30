import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class MainPage extends Component {
    onPress = (item) => {
        let { navigate } = this.props.navigation;
        navigate(item);
    };

    render() {
        return (
            <View style={ styles.container}>
                <TouchableOpacity style={ styles.button} onPress={ () => this.onPress('ShoppingCarPage') }>
                    <Text>原生购物车</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.button} onPress={ () => this.onPress('MobxShoppingCarPage') }>
                    <Text>Mobx购物车</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    button: {
        height : 44,
        justifyContent : 'center',
        alignItems:'center',
    }
});
