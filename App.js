import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Signature from './src/screens/Signature/Signature';
import { MyTheme, stylesMainContainer } from './src/theme';

export default function App() {
  return (
    <View style={stylesMainContainer.container}>
      {/* <Navigation /> */}
      <Signature />
      <StatusBar style="auto" />
    </View>
  );
}
