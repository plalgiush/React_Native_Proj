import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen/HomeScreen';
import Signature from './Signature/Signature';
import Sprints from './Sprints/Sprints';
import Purpose from './Purpose/Purpose';
import Login from './Login/Login';
import Register from './Register/Register';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" components={HomeScreen} />
        <Stack.Screen name="Signature" components={Signature} />
        <Stack.Screen name="Sprints" components={Sprints} />
        <Stack.Screen name="Purpose" components={Purpose} />
        <Stack.Screen name="Login" components={Login} />
        <Stack.Screen name="Register" components={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
