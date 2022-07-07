import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../../utils/constants/screenNames';
import CollapsedScreen from '../../modules/collapsedModule/screens/collapsedScreen';

const Stack = createNativeStackNavigator();

export default function NavigationMainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.collapsedScreen}
        component={CollapsedScreen}
      />
    </Stack.Navigator>
  );
}
