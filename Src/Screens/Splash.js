import { View, Image } from 'react-native';
import React,{ useEffect } from 'react';
import Auth from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native';


const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(async() => {
       const unSubscribe = await Auth().onAuthStateChanged((user) => {
        const routeName = user !== null ? 'Home' : 'Login';
        unSubscribe();
          navigation.dispatch(StackActions.replace(routeName));
       });
    }, 2000);
  }, [])
  

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
       <Image
        source={require('../Assets/Glads.png')}
        style={{height: 190, width: 190}}
       />
    </View>
  )
}

export default Splash;