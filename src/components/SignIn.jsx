import { TextInput, View, Pressable, StyleSheet } from 'react-native-web';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    margin: 8,
    padding: 12,
    border: `2px solid ${theme.colors.secondary}`,
    borderRadius: 8
  },
  inputError: {
    margin: 8,
    padding: 12,
    border: `2px solid red`,
    borderRadius: 8
  },
  button: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    padding: 12,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const initialValues = {
  username: '',
  password: ''
}

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <View>
      <TextInput style={formik.errors.username ? styles.inputError : styles.input} placeholder="Username" value={formik.values.username} onChangeText={formik.handleChange('username')} />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red', marginLeft: 12, marginTop: -8 }}>{formik.errors.username}</Text>
      )}
      <TextInput style={formik.errors.password ? styles.inputError : styles.input} placeholder='Password' value={formik.values.password} onChangeText={formik.handleChange('password')} secureTextEntry />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red', marginLeft: 12, marginTop: -8 }}>{formik.errors.password}</Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text color="white" fontWeight="bold" style={{textAlign: 'center'}}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;