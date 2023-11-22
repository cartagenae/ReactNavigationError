import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Inside the ThirdScreen</Text>
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

export default ThirdScreen;