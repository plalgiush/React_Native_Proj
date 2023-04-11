import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen/HomeScreen';
import Signature from './Signature/Signature';
import Sprints from './Sprints/Sprints';
import Purpose from './Purpose/Purpose';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" components={HomeScreen} />
        <Stack.Screen name="Signature" components={Signature} />
        <Stack.Screen name="Sprints" components={Sprints} />
        <Stack.Screen name="Purpose" components={Purpose} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
