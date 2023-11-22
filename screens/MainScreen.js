import React,
{
  useLayoutEffect,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import IconButton from '../components/IconButton';

function MainScreen ({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Main Screen',
      headerLeft: () => {
        return (
          <IconButton
            iconName='closesquare'
            iconSize={32}
            color='purple'
            onPress={() => {
              console.log('hello');
            }}
          />
        )
      }
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text>Inside the MainScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default MainScreen;