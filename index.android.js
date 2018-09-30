import { AppRegistry } from 'react-native';
//import App from './jscode/tabOne/App'
//import App from './jscode/shoppingcar/src/App'
//import App from './jscode/themes/App'
import App from './jscode/shoppingcar/src/App'


global.__APP__ = true;
global.__ANDROID__ = false;
global.__IOS__ = true;

if (!__DEV__) {
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        error: () => {},
    };
}

AppRegistry.registerComponent('All', () => App);