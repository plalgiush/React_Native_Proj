import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen/HomeScreen';
import Signature from './Signature/Signature';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" components={HomeScreen} />
        <Stack.Screen name="Signature" components={Signature} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
