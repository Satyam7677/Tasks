import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';

import MyKarmaAllTime from '../../modules/collapsedModule/screens/myKarmaAllTime';
import MyKarmaAugust from '../../modules/collapsedModule/screens/myKarmaAugust';

import {screenNames} from '../../utils/constants/screenNames';

const TopTab = createMaterialTopTabNavigator();
export default function MyKarmaTopTab2() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name={screenNames.topTab2Screen1}
        component={MyKarmaAugust}
      />

      <TopTab.Screen
        name={screenNames.topTab2Screen2}
        component={MyKarmaAllTime}
      />
    </TopTab.Navigator>
  );
}
