import {
  Pressable,
  StyleSheet,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

function IconButton ({
  iconName,
  iconSize,
  color,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => (
        pressed && styles.pressed
      )}
    >
      <AntDesign
        name={iconName}
        color={color}
        size={iconSize}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  }
})

export default IconButton;
