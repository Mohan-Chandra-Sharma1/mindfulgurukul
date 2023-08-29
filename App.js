import React, { useEffect } from 'react';
import { Platform, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './Components/DashboardScreen';
import EditUserScreen from './Components/EditUserScreen';
import LoginScreen from './Components/LoginScreen';
import SignupScreen from './Components/SignupScreen';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const handleBackPress = () => {
      console.log('Back button pressed');
      // Handle your back button logic here
      return true; // Prevent default behavior
    };

    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    }

    return () => {
      if (Platform.OS === 'android') {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      }
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="EditUser" component={EditUserScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
