import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationMainStack from './src/routes/stacks/navigationMainStack';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationMainStack />
    </NavigationContainer>
  );
}
