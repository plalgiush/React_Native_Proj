import { View } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginUrl = 'https://stage.day.shellpea.com/api/v1/login';

  console.log(username, password);

  const user = {
    email: 'ilya@test.com',
    password: 'password',
  };

  const auth = async () => {
    console.log(username, password);
    // const response = await fetch(loginUrl, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify(user),
    // });

    // let result = await response.json();
    // console.log(result);
  };

  return (
    <View
      style={{
        alignItems: 'center',
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
          <Input placeholder="Login" onChangeText={(text) => console.log(text)} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <FontAwesome name="lock" color="#00716F" size={24} />
          <Input placeholder="Password" onChangeText={(text) => console.log(text)} />
        </View>
      </View>
      <View>
        <Button theme="primary" label="Войти" onPress={() => auth()} />
      </View>
      <Button label="Новый пользователь" onPress={() => navigate('Register')} />
    </View>
  );
};

export default Login;
