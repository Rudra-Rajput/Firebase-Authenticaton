// import react,{useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Splash from '../Screens/Splash';
import Home from '../Screens/Home';
import PhoneAuth from '../Screens/PhoneAuth';


const Stack = createStackNavigator();

const MainNavigator = () => {

    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Spash" component={Splash} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Log in with OTP" component={PhoneAuth} />
        </Stack.Navigator>
        </NavigationContainer>
      );
}

export default MainNavigator;
