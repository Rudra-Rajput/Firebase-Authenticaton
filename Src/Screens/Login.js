import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import {TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native';


const Login = ({navigation}) => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const handleSubmit = async() => {
    try {
      if (email.length>0 && password.length>0) {
        await auth().signInWithEmailAndPassword(email, password);
        navigation.dispatch(StackActions.replace('Home'));
      }
      else{
        alert('All fields are required');
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{marginHorizontal: '4%'}}>
      
        <View style={styles.InputContainer}>
          <TextInput
            mode="flat"
            label="Enter Your Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(txt)=>setemail(txt)}
          />
        </View>

        <View style={styles.InputContainer}>
          <TextInput
            mode="flat"
            label="Enter Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(txt)=>setpassword(txt)}
          />
        </View>
      </View>

      <TouchableOpacity onPress={()=>handleSubmit()} activeOpacity={0.8} style={styles.BtnContainer}>
        <Text style={styles.BtnText}>LOG IN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>navigation.dispatch(StackActions.replace('Register'))}
        activeOpacity={0.8}
        style={{marginTop: '5%', alignItems: 'center'}}>
        <Text style={{color: '#000000', fontSize: 15, fontWeight: '500'}}>
          I have no account <Text style={{color: 'blue', fontWeight: 'bold'}}>Register ?</Text>{' '}
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={()=>navigation.dispatch(StackActions.replace('Log in with OTP'))}
        activeOpacity={0.8}
        style={{marginTop: '5%', alignItems: 'center'}}>
        <Text style={{color: '#000000', fontSize: 15, fontWeight: '500'}}>
          Log In With <Text style={{color: 'blue', fontWeight: 'bold'}}>OTP?</Text>{' '}
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

export default Login;
