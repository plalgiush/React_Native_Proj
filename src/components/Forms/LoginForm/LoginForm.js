import { View } from 'react-native';
import { user_login } from '../../../api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import CustomField from '../../Field/CustomField';
import Button from '../../Button/Button';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    // .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    // .matches(/\d/, 'Password must have a number')
    // .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
});

const LoginForm = ({ navigation }) => {
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={async ({ email, password } = values) => {
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
        }}>
        {({ handleSubmit, isValid }) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <FontAwesome name="envelope" color="#00716F" size={24} />
              <Field
                component={CustomField}
                name="email"
                placeholder="Email Address"
                keyboardType="email-address"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <FontAwesome name="lock" color="#00716F" size={24} />
              <Field
                component={CustomField}
                name="password"
                placeholder="Password"
                secureTextEntry
              />
            </View>
            <View>
              <Button theme="primary" label="Войти" onPress={handleSubmit} disabled={!isValid} />
            </View>
            <Button label="Новый пользователь" onPress={() => navigation.navigate('SignUp')} />
          </View>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
