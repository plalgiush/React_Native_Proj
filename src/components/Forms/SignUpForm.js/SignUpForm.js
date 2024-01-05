import { SafeAreaView, StyleSheet, View } from 'react-native';
import { user_register } from '../../../api/user_api';
import { FontAwesome } from '@expo/vector-icons';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import CustomField from '../../Field/CustomField';
import Button from '../../Button/Button';

const signUpValidationSchema = yup.object().shape({
  name: yup
    .string(),
    // .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    // .required('Full name is required'),
  // phoneNumber: yup
  //   .string()
  //   .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
  //   .required('Phone number is required'),
  email: yup.string().email('Please enter valid email').required('Email is required'),
  password: yup
    .string()
    // .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    // .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    // .matches(/\d/, 'Password must have a number')
    // .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
    // .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
    password_confirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

const SignUpForm = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.signupContainer}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              // phoneNumber: '',
              password: '',
              password_confirmation: '',
            }}
            validationSchema={signUpValidationSchema}
            onSubmit={async ({ name, email, password, password_confirmation } = values) => {
              user_register({
                name,
                email,
                password,
                password_confirmation,
              })
                .then((result) => {
                  if (result.status == 201) {
                    navigation.replace('Login');
                  }
                })
                .catch((error) => {
                  console.error(error);
                });
            }}>
            {({ handleSubmit, isValid }) => (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <FontAwesome name="user" color="#00716F" size={24} />
                  <Field component={CustomField} name="name" placeholder="Full Name" />
                </View>
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
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <FontAwesome name="lock" color="#00716F" size={24} />
                  <Field
                    component={CustomField}
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    secureTextEntry
                  />
                </View>
                <Button
                  theme="primary"
                  label="Регистрация"
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    alignItems: 'center',
    padding: 10,
    elevation: 10,
  },
});
export default SignUpForm;
