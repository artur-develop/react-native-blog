import React from 'react'
import {View,Text, StyleSheet, FlatList} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {Post} from '../components/Post'
import {DATA} from '../data'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import {PostList} from "../components/PostList";

export const BookedScreen = ({navigation}) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked
    })
  }

  return (
    <PostList
      data={DATA.filter(post => post.booked)}
      onOpen={openPostHandler}
    />
  )
}

BookedScreen.navigationOptions = (navigation) => ({
  headerTitle: 'Favorites',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle Drawer'
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
})

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})