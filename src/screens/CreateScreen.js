import React, {useState, useRef} from 'react'
import {View,Text, StyleSheet, TextInput,
  Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import {useDispatch} from 'react-redux'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import {PhotoPicker} from '../components/PhotoPicker'
import {addPost} from '../store/actions/post'
import {THEME} from '../theme'

export const CreateScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const imgRef = useRef()

  const createPostHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img: imgRef.current,
      booked: false
    }
    dispatch(addPost(post))
    navigation.navigate('Main')
  }

  const photoPickHandler = uri => {
    imgRef.current = uri
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
          <PhotoPicker onPick={photoPickHandler} />
          <Button
            title='Create post'
            color={THEME.MAIN_COLOR}
            onPress={createPostHandler}
            disabled={!text}
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