import { View, Pressable, Text } from 'react-native';
import { button } from './style';

export default function Button({ label, theme, onPress }) {
  if (theme === 'primary') {
    return (
      <View style={[button.buttonContainer]}>
        <Pressable style={[button.button, { backgroundColor: '#fff' }]} onPress={onPress}>
          <Text style={[button.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={button.buttonContainer}>
      <Pressable style={button.button} onPress={onPress}>
        <Text style={button.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

