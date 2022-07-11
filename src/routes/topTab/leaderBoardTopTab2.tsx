import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';

import {screenNames} from '../../utils/constants/screenNames';
import LeaderBoardAugust from '../../modules/collapsedModule/screens/leaderBoardAugust';

const TopTab = createMaterialTopTabNavigator();
export default function LeaderBoardTopTab2() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name={screenNames.topTab2Screen1}
        component={LeaderBoardAugust}
      />

      <TopTab.Screen
        name={screenNames.topTab2Screen2}
        component={LeaderBoardAugust}
      />
    </TopTab.Navigator>
  );
}
