import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {screenNames} from '../../utils/constants/screenNames';
import TopTab1LeaderBoard from '../../modules/collapsedModule/screens/topTab1LeaderBoard';
import TopTab1MyKarma from '../../modules/collapsedModule/screens/topTab1MyKarma';
import {Animated, StyleSheet, Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();
export default function TopTab1() {
  return (
    <Animated.View style={styles.mainViewStyle}>
      <Tab.Navigator>
        <Tab.Screen
          name={screenNames.topTab1Screen1}
          component={TopTab1LeaderBoard}
          options={{
            tabBarLabel: () => <Text>{screenNames.topTab1Screen1}</Text>,
          }}
        />
        <Tab.Screen
          name={screenNames.topTab1Screen2}
          component={TopTab1MyKarma}
          options={{
            tabBarLabel: () => <Text>{screenNames.topTab1Screen2}</Text>,
          }}
        />
      </Tab.Navigator>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  mainViewStyle: {flex: 1},
});
