import { useState } from 'react';
import { View } from 'react-native';
import { user_register } from '../../api/user_api';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const handleRegister = async () => {
    user_register({
      name,
      email,
      password,
      password_confirmation,
    })
      .then((result) => {
        if (result.status == 200) {
          navigation.replace('Login');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <View>
        <Input
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          placeholderTextColor="#000"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
      <View>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#000"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
      <View>
        <Input
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="#000"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
      <View>
        <Input
          secureTextEntry
          placeholder="Confirm Password"
          value={password_confirmation}
          onChangeText={(text) => setPasswordConfirmation(text)}
          placeholderTextColor="#000"
          style={{ paddingHorizontal: 10 }}
        />
      </View>

      <View>
        <Button theme="primary" label="Регистрация" onPress={() => handleRegister()} />
      </View>
    </View>
  );
};

export default Register;
