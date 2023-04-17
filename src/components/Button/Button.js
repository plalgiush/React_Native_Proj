import { View, Pressable, Text } from 'react-native';
import { stylesButton } from './style';

export default function Button({ label, theme, onPress }) {
  if (theme === 'primary') {
    return (
      <View style={[stylesButton.buttonContainer]}>
        <Pressable style={[stylesButton.button, { backgroundColor: '#fff' }]} onPress={onPress}>
          <Text style={[stylesButton.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={stylesButton.buttonContainer}>
      <Pressable style={stylesButton.button} onPress={onPress}>
        <Text style={[stylesButton.buttonLabel, { color: '#00716F' }]}>{label}</Text>
      </Pressable>
    </View>
  );
}

