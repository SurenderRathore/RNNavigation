import {createAppContainer, createStackNavigator} from 'react-navigation'
import HomeScreen from './Home';
import DetailScreen from './Detail'

const AppNavigator = createStackNavigator({
    HomePage:HomeScreen,
    DetailPage:DetailScreen,
},
{
    initialRouteName:"HomePage"
}
);
export default createAppContainer(AppNavigator);