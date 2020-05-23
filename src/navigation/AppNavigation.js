import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {MainScreen} from '../screens/MainScreen'
import {PostScreen} from '../screens/PostScreen'
import {THEME} from '../theme'

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
      title: 'Post Screen',
      headerStyle: {
        backgroundColor: '#786969'
      }
    }
  }
}, {
  initialRouteName: 'Main',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: THEME.MAIN_COLOR
    },
    headerTintColor: '#fff'
  }
})

export const AppNavigation = createAppContainer(PostNavigator)