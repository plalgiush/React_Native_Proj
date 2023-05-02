import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MyTheme, stylesMainContainer } from './src/theme';
import { pages } from './src/mockData';

export default function App() {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <View style={stylesMainContainer.container}>
      <NavigationContainer theme={MyTheme}>
        <Navigator>
          {pages.map(
            ({ name, component, id, options }) =>
              component && <Screen key={id} name={name} component={component} options={options} />
          )}
        </Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}
