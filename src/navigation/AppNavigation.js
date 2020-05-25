import React from 'react'
import {Platform} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Ionicons} from '@expo/vector-icons'
import {MainScreen} from '../screens/MainScreen'
import {PostScreen} from '../screens/PostScreen'
import {BookedScreen} from '../screens/BookedScreen'
import {AboutScreen} from '../screens/AboutScreen'
import {CreateScreen} from '../screens/CreateScreen'
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

const BookedNavigator = createStackNavigator({
  Booked: BookedScreen,
  Post: {
    screen: PostScreen
  },
},
  {
    initialRouteName: 'Booked',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: THEME.MAIN_COLOR
      },
      headerTintColor: '#fff'
    }
  })

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarIcon: info => (
        <Ionicons
          name='ios-albums'
          size={25}
          color={info.tintColor}
        />)
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarIcon: info => (
        <Ionicons
          name='ios-star'
          size={25}
          color={info.tintColor}
        />)
    }
  }
}

const BottomNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(bottomTabsConfig)
  : createBottomTabNavigator(
    bottomTabsConfig,{
      tabBarOptions: {
        activeTintColor: THEME.MAIN_COLOR
      }
})

const MainNavigator = createDrawerNavigator({
  PostTabs: {
    screen: BottomNavigator
  },
  About: {
    screen: AboutScreen
  },
  Create: {
    screen: CreateScreen
  }
})

export const AppNavigation = createAppContainer(MainNavigator)