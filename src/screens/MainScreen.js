import React from 'react'
import {View,Text, StyleSheet, FlatList} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {Post} from '../components/Post'
import {DATA} from '../data'
import {AppHeaderIcon} from '../components/AppHeaderIcon'

export const MainScreen = ({navigation}) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date
    })
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <Post post={item} onOpen={openPostHandler}/>}
      />
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: 'My Blog',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo'
        iconName='ios-camera'
        onPress={() => console.log('Press photo')}
      />
    </HeaderButtons>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})