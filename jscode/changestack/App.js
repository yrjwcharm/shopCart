import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter
} from 'react-native';

import ChangeStack from './ChangeStack'
import NormalStack from './NormalStack'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isChange:true,
        }
    }

    componentDidMount() {
        this.msgListener = DeviceEventEmitter.addListener('change',(listenerMsg) => {
            this.setState({
                isChange:!this.state.isChange,
            })
        });
    }

    componentWillUnmount() {
        this.msgListener&&this.msgListener.remove();
    }


    render() {
        let mainView=!this.state.isChange? <ChangeStack />: <NormalStack />;
        return (
            <View style={styles.container}>
                {mainView}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
});