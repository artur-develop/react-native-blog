import React, {useState} from 'react'
import {View,Text, StyleSheet, TextInput,
  Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import {useDispatch} from 'react-redux'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import {addPost} from '../store/actions/post'
import {THEME} from '../theme'

export const CreateScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const img = 'https://i1.wp.com/paikea.ru/wp-content/uploads/2018/05/savannah-usa-04.jpg'
  const createPostHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img,
      booked: false
    }
    dispatch(addPost(post))
    navigation.navigate('Main')
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create post</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Text"
            value={text}
            onChangeText={setText}
            multiline
          />
          <Image
            style={{width: '100%', height: 200, marginBottom: 10}}
            source={{uri: img}}
          />
          <Button
            title='Create post'
            color={THEME.MAIN_COLOR}
            onPress={createPostHandler}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

CreateScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'Create',
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
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular',
    marginVertical: 10
  },
  textarea: {
    padding: 10,
    marginBottom: 10
  }
})