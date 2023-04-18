import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    handleGetToken();
  }, []);

  const handleGetToken = async () => {
    const dataToken = await AsyncStorage.getItem('accessToken');

    !dataToken ? navigation.replace('Login') : navigation.replace('HomeScreen');
  };

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
