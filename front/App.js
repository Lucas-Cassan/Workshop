import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Appbar from './src/components/Appbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
      <NavigationContainer>
        <StackNavigator/>
        <StatusBar style='dark'/>
        <Appbar/>
      </NavigationContainer>
  );
}
