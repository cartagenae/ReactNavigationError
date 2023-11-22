import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const SecondaryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Inside the SecondaryScreen</Text>
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

export default SecondaryScreen;