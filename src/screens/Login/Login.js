import { View } from 'react-native';
import { user_login } from '../../api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    user_login({
      email,
      password,
    })
      .then((result) => {
        if (result.status == 200) {
          AsyncStorage.setItem('accessToken', result.data.access_token);
          navigation.replace('HomeScreen');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <View
        style={{
          maxWidth: 260,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <FontAwesome name="envelope" color="#00716F" size={24} />
          <Input placeholder="Login" value={email} onChangeText={(text) => setEmail(text)} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <FontAwesome name="lock" color="#00716F" size={24} />
          <Input placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry />
        </View>
      </View>
      <View>
        <Button theme="primary" label="Войти" onPress={() => handleLogin()} />
      </View>
      <Button label="Новый пользователь" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default Login;
