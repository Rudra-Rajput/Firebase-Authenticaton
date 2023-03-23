import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {StackActions} from '@react-navigation/native';

const Register = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    try {
      if (email.length > 0 && password.length > 0 && name.length > 0 && phoneNumber.length > 0) {

        const response = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );

        const userData = {
          id: response.user.uid,
          name: name,
          // email: email,
          phoneNumber: phoneNumber,
          // password: password,
        } 
        await firestore().collection('users').doc(response.user.uid).set(userData);

        navigation.dispatch(StackActions.replace('Home'));
      } else {
        alert('All fields are required');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{marginHorizontal: '4%'}}>
        <View style={styles.InputContainer}>
          <TextInput
            mode="flat"
            label="Enter Your Name"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            mode="flat"
            label="Enter Your Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setemail}
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            mode="flat"
            label="Enter Mobile Number"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            mode="flat"
            label="Enter Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setpassword}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => handleSubmit()}
        activeOpacity={0.8}
        style={styles.BtnContainer}>
        <Text style={styles.BtnText}>REGISTER</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.replace('Login'))}
        activeOpacity={0.8}
        style={{marginTop: '5%', alignItems: 'center'}}>
        <Text style={{color: '#000000', fontSize: 15, fontWeight: '500'}}>
          Already have an account{' '}
          <Text style={{color: 'blue', fontWeight: 'bold'}}>Log In ?</Text>{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  InputContainer: {
    marginTop: '5%',
  },
  BtnContainer: {
    marginTop: '10%',
    backgroundColor: 'blue',
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  BtnText: {
    color: '#FFFFFF',
    paddingVertical: 8,
    fontSize: 17,
    fontWeight: '500',
  },
});

export default Register;
