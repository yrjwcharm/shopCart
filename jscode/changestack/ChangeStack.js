import {StackNavigator } from 'react-navigation';
import ChangeComponent from './ChangeComponent'

const ChangeStack = StackNavigator({
    ChangeComponent: {screen:ChangeComponent},
},{
    swipeEnabled:false,
    animationEnabled:false,
    backBehavior:'none',
    lazy:true,
});

export default ChangeStack;