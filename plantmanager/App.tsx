import React from 'react';
import AppLoading from 'expo-app-loading';
import {View, Text} from 'react-native';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'

import { Welcome } from './src/pages/Welcome';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  // While the fonts are not loaded, render the component below
  if(!fontsLoaded)
    return 
      <AppLoading />

  return (
    <Welcome />
  )
};
