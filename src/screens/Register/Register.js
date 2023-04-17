import { Text, View } from 'react-native';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Register = () => {
  const registerUrl = 'https://stage.day.shellpea.com/api/v1/register';

  

  return (
    <View>
      <View>
        <Input
          placeholder="Email"
          placeholderTextColor="#000"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
      <View>
        <Input
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#000"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
      <View>
        <Input
          secureTextEntry
          placeholder="Confirm Password"
          placeholderTextColor="#000"
          style={{ paddingHorizontal: 10 }}
        />
      </View>

      <View>
        <Button theme="primary" label="Регистрация" onPress={() => console.log(12124)} />
      </View>
    </View>
  );
};

export default Register;
