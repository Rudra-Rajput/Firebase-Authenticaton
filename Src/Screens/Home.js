import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Auth from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/native';


const Home = ({navigation}) => {
  
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{marginTop: '5%'}}>
        <Text style={{alignSelf: 'center', color: '#000000'}}>
          {Auth().currentUser.email}
        </Text>
        <Text style={{alignSelf: 'center', color: '#000000'}}>
          {Auth().currentUser.phoneNumber}
        </Text>
        <Text style={{alignSelf: 'center', color: '#000000'}}>
          {Auth().currentUser.uid}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={async () => {
            await Auth().signOut();
            navigation.dispatch(StackActions.replace('Login'));
          }}
          style={[styles.BtnContainer, {backgroundColor: 'red'}]}>
          <Text style={styles.BtnText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Home;
