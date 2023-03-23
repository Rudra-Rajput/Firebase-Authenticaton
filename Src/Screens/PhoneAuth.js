import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {StackActions} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';



const PhoneAuth = ({navigation}) => {

  const [phone, setPhone] = useState("");
  const [verify, setVerify] = useState("");
  const [confirmData, setConfirmData] = useState("");

  const sentOtp = async () => {
    try {
      const mobile = '+91' + phone;
      const response = await auth().signInWithPhoneNumber(mobile);
      console.log(response);
      setConfirmData(response);
      alert('Success! OTP successfully sent.!');
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await confirmData.confirm(verify);
      console.log(response);
      navigation.dispatch(StackActions.replace('Home'));
      alert('Success! OTP successfully verified');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
     <View style={{marginHorizontal: '5%', marginTop: '10%'}}>
        <TextInput
          label="Mobile Number"
          mode="flat"
          keyboardType="numeric"
          onChangeText={value => setPhone(value)}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => sentOtp()}
          style={[styles.BtnContainer, {backgroundColor: 'red'}]}>
          <Text style={styles.BtnText}>SEND OTP</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginHorizontal: '5%', marginTop: '10%'}}>
        <TextInput
          label="Enter OTP"
          mode="flat"
          keyboardType="numeric"
          onChangeText={value => setVerify(value)}
        />
        <TouchableOpacity
          onPress={() => verifyOtp()}
          activeOpacity={0.8}
          style={[styles.BtnContainer, {backgroundColor: 'green'}]}>
          <Text style={styles.BtnText}>VERIFY OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    BtnContainer: {
      marginTop: '4%',
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

export default PhoneAuth;