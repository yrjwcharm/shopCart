
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,Image} from 'react-native';

export default class TabMyPage extends Component {
    static navigationOptions = {
        headerRight: (<TouchableOpacity
                onPress={() => {
                   console.log("我的");
            }}>
                <Text style={{ color: '#4a4a4a'}}>帮助</Text>
            </TouchableOpacity>
        )
    };


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('MinePage');
                    }}
                >
                    <Text style={styles.msg}>点击进入MinePage子页面{'\n'}隐藏TabBar</Text>
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
