import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Signup from './components/Signup';

export default function App() {
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView> 
  );
};