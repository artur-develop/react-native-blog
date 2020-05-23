import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {MainScreen} from '../screens/MainScreen'
import {PostScreen} from '../screens/PostScreen'

const PostNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      title: 'Welcome'
    }
  },
  Post: {
    screen: PostScreen,
    navigationOptions: {
      title: 'Post Screen'
    }
  }
}, {
  initialRouteName: 'Main'
})

export const AppNavigation = createAppContainer(PostNavigator)